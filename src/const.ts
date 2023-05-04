import {createPubSub} from "graphql-yoga";

export const CV_UPDATED = 'CV_UPDATED';
export const CV_DELETED = 'CV_DELETED';
export const CV_ADDED = 'CV_ADDED';
export const fs = require('fs');
export const path = require("path");
export const pubSub = createPubSub();