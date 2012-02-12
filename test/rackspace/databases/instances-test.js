/*
 * instances-test.js: Tests for Rackspace Cloud Database instances
 *
 * (C) 2010 Nodejitsu Inc.
 * MIT LICENSE
 *
 */

var vows = require('vows'),
    assert = require('../../helpers/assert'),
    helpers = require('../../helpers');

var client = helpers.createClient('rackspace', 'database');

vows.describe('pkgcloud/rackspace/databases/instances').addBatch({
  "The pkgcloud Rackspace database client": {
    "the getInstances() method": {
      "with no details": {
        topic: function () {
          client.getInstances(this.callback);
        },
        "should return the list of instances": function (err, instances) {
          assert.isNull(err);
          console.log(instances);
          assert.isTrue(false);
        }
      },
      "with details": {
        topic: function () {
          client.getInstances(true, this.callback);
        },
        "should return list status and details for all databases": function (err, info) {
          assert.isNull(err);
          console.log('La info', info);
          assert.isTrue(false);
        }
      }
    }
  } 
}).addBatch({
  "The pkgcloud Rackspace database client": {
    "the create() method": {
     topic: function () {
       client.createInstance(this.callback);
     },
     "should return a valid instance": function(err, instance) {
      assert.isNull(err);
      console.log(instance);
      assert.isTrue(false);
     }
    }
  }
}).export(module);
