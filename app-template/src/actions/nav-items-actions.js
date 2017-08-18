import 'isomorphic-fetch';
import {checkStatus, parseJSON} from './utils.js';
import modules from '../utils/modules'
import {routeActions} from 'react-router-redux'

export const INVALIDATE_NAV_ITEMS = 'INVALIDATE_NAV_ITEMS';
export const NAV_ITEMS_REQUEST = 'NAV_ITEMS_REQUEST';
export const NAV_ITEMS_SUCCESS = 'NAV_ITEMS_SUCCESS';
export const NAV_ITEMS_FAILURE = 'NAV_ITEMS_FAILURE';

export function invalidateNavItems() {
  return {type: INVALIDATE_NAV_ITEMS};
}

function navItemsRequest() {
  return {type: NAV_ITEMS_REQUEST};
}

function navItemsSuccess(payload) {
  return {type: NAV_ITEMS_SUCCESS, navItems: payload.navItems};
}

function navItemsFailure(error) {
  return {type: NAV_ITEMS_FAILURE, error};
}

export function fetchNavItems() {
  //const API_URL = (`../data/${clientId}/navigation/navigation.json`);
  return dispatch => {
    let json = {
      incomplete_results: false,
      navItems: []
    }

    modules.forEach((value) => {
      value
        .routes
        .forEach((route) => {
          if (route.isStart) {
            json
              .navItems
              .push({
                modulename: value.modulename,
                component: route.component,
                linkto: '/'+value.modulename+((route.location && route.location!='/')?(route.location):''),
                permition: value.permition,
                label: value.menulabel
              })
          }
        })
    });
    dispatch(navItemsSuccess(json))
  }
}

function shouldFetchNavItems(state) {
  // Check cache first
  const navItems = state.navItemsPerClient;
  if (!navItems || navItems.length === undefined) {
    // Not cached, should fetch
    return true;
  }

  if (navItems.isFetching) {
    // Shouldn't fetch since fetching is running
    return false;
  }

  // Should fetch if cache was invalidate
  return navItems.didInvalidate;
}

export function fetchNavItemsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchNavItems(getState())) {
      return dispatch(fetchNavItems());
    }
  };
}
