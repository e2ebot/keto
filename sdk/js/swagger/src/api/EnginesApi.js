/**
 *
 * Package main ORY Keto
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.sh
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      'ApiClient',
      'model/AddOryAccessControlPolicyRoleMembersBody',
      'model/AuthorizationResult',
      'model/InlineResponse500',
      'model/OryAccessControlPolicies',
      'model/OryAccessControlPolicy',
      'model/OryAccessControlPolicyAllowedInput',
      'model/OryAccessControlPolicyRole',
      'model/RemoveOryAccessControlPolicyRoleMembersBody'
    ], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('../model/AddOryAccessControlPolicyRoleMembersBody'),
      require('../model/AuthorizationResult'),
      require('../model/InlineResponse500'),
      require('../model/OryAccessControlPolicies'),
      require('../model/OryAccessControlPolicy'),
      require('../model/OryAccessControlPolicyAllowedInput'),
      require('../model/OryAccessControlPolicyRole'),
      require('../model/RemoveOryAccessControlPolicyRoleMembersBody')
    )
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {}
    }
    root.SwaggerJsClient.EnginesApi = factory(
      root.SwaggerJsClient.ApiClient,
      root.SwaggerJsClient.AddOryAccessControlPolicyRoleMembersBody,
      root.SwaggerJsClient.AuthorizationResult,
      root.SwaggerJsClient.InlineResponse500,
      root.SwaggerJsClient.OryAccessControlPolicies,
      root.SwaggerJsClient.OryAccessControlPolicy,
      root.SwaggerJsClient.OryAccessControlPolicyAllowedInput,
      root.SwaggerJsClient.OryAccessControlPolicyRole,
      root.SwaggerJsClient.RemoveOryAccessControlPolicyRoleMembersBody
    )
  }
})(this, function(
  ApiClient,
  AddOryAccessControlPolicyRoleMembersBody,
  AuthorizationResult,
  InlineResponse500,
  OryAccessControlPolicies,
  OryAccessControlPolicy,
  OryAccessControlPolicyAllowedInput,
  OryAccessControlPolicyRole,
  RemoveOryAccessControlPolicyRoleMembersBody
) {
  'use strict'

  /**
   * Engines service.
   * @module api/EnginesApi
   * @version Latest
   */

  /**
   * Constructs a new EnginesApi.
   * @alias module:api/EnginesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance

    /**
     * Callback function to receive the result of the addOryAccessControlPolicyRoleMembers operation.
     * @callback module:api/EnginesApi~addOryAccessControlPolicyRoleMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OryAccessControlPolicyRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a member to an ORY Access Control Policy Role
     * Roles group several subjects into one. Rules can be assigned to ORY Access Control Policy (OACP) by using the Role ID as subject in the OACP.
     * @param {String} ID The ID of the ORY Access Control Policy Role.
     * @param {String} flavor The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddOryAccessControlPolicyRoleMembersBody} opts.body
     * @param {module:api/EnginesApi~addOryAccessControlPolicyRoleMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OryAccessControlPolicyRole}
     */
    this.addOryAccessControlPolicyRoleMembers = function(
      ID,
      flavor,
      opts,
      callback
    ) {
      opts = opts || {}
      var postBody = opts['body']

      // verify the required parameter 'ID' is set
      if (ID === undefined || ID === null) {
        throw new Error(
          "Missing the required parameter 'ID' when calling addOryAccessControlPolicyRoleMembers"
        )
      }

      // verify the required parameter 'flavor' is set
      if (flavor === undefined || flavor === null) {
        throw new Error(
          "Missing the required parameter 'flavor' when calling addOryAccessControlPolicyRoleMembers"
        )
      }

      var pathParams = {
        ID: ID,
        flavor: flavor
      }
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = []
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = OryAccessControlPolicyRole

      return this.apiClient.callApi(
        '/engines/ory/{flavor}/roles/{id}/members',
        'PUT',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the deleteOryAccessControlPolicy operation.
     * @callback module:api/EnginesApi~deleteOryAccessControlPolicyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an ORY Access Control Policy
     * @param {String} flavor The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;.
     * @param {String} ID The ID of the ORY Access Control Policy Role.
     * @param {module:api/EnginesApi~deleteOryAccessControlPolicyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOryAccessControlPolicy = function(flavor, ID, callback) {
      var postBody = null

      // verify the required parameter 'flavor' is set
      if (flavor === undefined || flavor === null) {
        throw new Error(
          "Missing the required parameter 'flavor' when calling deleteOryAccessControlPolicy"
        )
      }

      // verify the required parameter 'ID' is set
      if (ID === undefined || ID === null) {
        throw new Error(
          "Missing the required parameter 'ID' when calling deleteOryAccessControlPolicy"
        )
      }

      var pathParams = {
        flavor: flavor,
        ID: ID
      }
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = []
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = null

      return this.apiClient.callApi(
        '/engines/ory/{flavor}/policies/{id}',
        'DELETE',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the deleteOryAccessControlPolicyRole operation.
     * @callback module:api/EnginesApi~deleteOryAccessControlPolicyRoleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an ORY Access Control Policy Role
     * Roles group several subjects into one. Rules can be assigned to ORY Access Control Policy (OACP) by using the Role ID as subject in the OACP.
     * @param {String} flavor The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;.
     * @param {String} ID The ID of the ORY Access Control Policy Role.
     * @param {module:api/EnginesApi~deleteOryAccessControlPolicyRoleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOryAccessControlPolicyRole = function(flavor, ID, callback) {
      var postBody = null

      // verify the required parameter 'flavor' is set
      if (flavor === undefined || flavor === null) {
        throw new Error(
          "Missing the required parameter 'flavor' when calling deleteOryAccessControlPolicyRole"
        )
      }

      // verify the required parameter 'ID' is set
      if (ID === undefined || ID === null) {
        throw new Error(
          "Missing the required parameter 'ID' when calling deleteOryAccessControlPolicyRole"
        )
      }

      var pathParams = {
        flavor: flavor,
        ID: ID
      }
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = []
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = null

      return this.apiClient.callApi(
        '/engines/ory/{flavor}/roles/{id}',
        'DELETE',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the doOryAccessControlPoliciesAllow operation.
     * @callback module:api/EnginesApi~doOryAccessControlPoliciesAllowCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthorizationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if a request is allowed
     * Use this endpoint to check if a request is allowed or not.
     * @param {String} flavor The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;.
     * @param {Object} opts Optional parameters
     * @param {module:model/OryAccessControlPolicyAllowedInput} opts.body
     * @param {module:api/EnginesApi~doOryAccessControlPoliciesAllowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthorizationResult}
     */
    this.doOryAccessControlPoliciesAllow = function(flavor, opts, callback) {
      opts = opts || {}
      var postBody = opts['body']

      // verify the required parameter 'flavor' is set
      if (flavor === undefined || flavor === null) {
        throw new Error(
          "Missing the required parameter 'flavor' when calling doOryAccessControlPoliciesAllow"
        )
      }

      var pathParams = {
        flavor: flavor
      }
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = []
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = AuthorizationResult

      return this.apiClient.callApi(
        '/engines/ory/{flavor}/allowed',
        'GET',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the getOryAccessControlPolicy operation.
     * @callback module:api/EnginesApi~getOryAccessControlPolicyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OryAccessControlPolicy} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an ORY Access Control Policy
     * @param {String} flavor The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;.
     * @param {String} ID The ID of the ORY Access Control Policy Role.
     * @param {module:api/EnginesApi~getOryAccessControlPolicyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OryAccessControlPolicy}
     */
    this.getOryAccessControlPolicy = function(flavor, ID, callback) {
      var postBody = null

      // verify the required parameter 'flavor' is set
      if (flavor === undefined || flavor === null) {
        throw new Error(
          "Missing the required parameter 'flavor' when calling getOryAccessControlPolicy"
        )
      }

      // verify the required parameter 'ID' is set
      if (ID === undefined || ID === null) {
        throw new Error(
          "Missing the required parameter 'ID' when calling getOryAccessControlPolicy"
        )
      }

      var pathParams = {
        flavor: flavor,
        ID: ID
      }
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = []
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = OryAccessControlPolicy

      return this.apiClient.callApi(
        '/engines/ory/{flavor}/policies/{id}',
        'GET',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the getOryAccessControlPolicyRole operation.
     * @callback module:api/EnginesApi~getOryAccessControlPolicyRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OryAccessControlPolicyRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an ORY Access Control Policy Role
     * Roles group several subjects into one. Rules can be assigned to ORY Access Control Policy (OACP) by using the Role ID as subject in the OACP.
     * @param {String} flavor The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;.
     * @param {String} ID The ID of the ORY Access Control Policy Role.
     * @param {module:api/EnginesApi~getOryAccessControlPolicyRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OryAccessControlPolicyRole}
     */
    this.getOryAccessControlPolicyRole = function(flavor, ID, callback) {
      var postBody = null

      // verify the required parameter 'flavor' is set
      if (flavor === undefined || flavor === null) {
        throw new Error(
          "Missing the required parameter 'flavor' when calling getOryAccessControlPolicyRole"
        )
      }

      // verify the required parameter 'ID' is set
      if (ID === undefined || ID === null) {
        throw new Error(
          "Missing the required parameter 'ID' when calling getOryAccessControlPolicyRole"
        )
      }

      var pathParams = {
        flavor: flavor,
        ID: ID
      }
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = []
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = OryAccessControlPolicyRole

      return this.apiClient.callApi(
        '/engines/ory/{flavor}/roles/{id}',
        'GET',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the listOryAccessControlPolicies operation.
     * @callback module:api/EnginesApi~listOryAccessControlPoliciesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OryAccessControlPolicies} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List ORY Access Control Policies
     * @param {String} flavor The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum amount of policies returned.
     * @param {Number} opts.offset The offset from where to start looking.
     * @param {module:api/EnginesApi~listOryAccessControlPoliciesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OryAccessControlPolicies}
     */
    this.listOryAccessControlPolicies = function(flavor, opts, callback) {
      opts = opts || {}
      var postBody = null

      // verify the required parameter 'flavor' is set
      if (flavor === undefined || flavor === null) {
        throw new Error(
          "Missing the required parameter 'flavor' when calling listOryAccessControlPolicies"
        )
      }

      var pathParams = {
        flavor: flavor
      }
      var queryParams = {
        limit: opts['limit'],
        offset: opts['offset']
      }
      var headerParams = {}
      var formParams = {}

      var authNames = []
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = OryAccessControlPolicies

      return this.apiClient.callApi(
        '/engines/ory/{flavor}/policies',
        'GET',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the removeOryAccessControlPolicyRoleMembers operation.
     * @callback module:api/EnginesApi~removeOryAccessControlPolicyRoleMembersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a member from an ORY Access Control Policy Role
     * Roles group several subjects into one. Rules can be assigned to ORY Access Control Policy (OACP) by using the Role ID as subject in the OACP.
     * @param {String} ID The ID of the ORY Access Control Policy Role.
     * @param {String} flavor The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;.
     * @param {Object} opts Optional parameters
     * @param {module:model/RemoveOryAccessControlPolicyRoleMembersBody} opts.body
     * @param {module:api/EnginesApi~removeOryAccessControlPolicyRoleMembersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeOryAccessControlPolicyRoleMembers = function(
      ID,
      flavor,
      opts,
      callback
    ) {
      opts = opts || {}
      var postBody = opts['body']

      // verify the required parameter 'ID' is set
      if (ID === undefined || ID === null) {
        throw new Error(
          "Missing the required parameter 'ID' when calling removeOryAccessControlPolicyRoleMembers"
        )
      }

      // verify the required parameter 'flavor' is set
      if (flavor === undefined || flavor === null) {
        throw new Error(
          "Missing the required parameter 'flavor' when calling removeOryAccessControlPolicyRoleMembers"
        )
      }

      var pathParams = {
        ID: ID,
        flavor: flavor
      }
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = []
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = null

      return this.apiClient.callApi(
        '/engines/ory/{flavor}/roles/{id}/members',
        'DELETE',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the upsertOryAccessControlPolicy operation.
     * @callback module:api/EnginesApi~upsertOryAccessControlPolicyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upsert an ORY Access Control Policy
     * @param {String} ID The ID of the ORY Access Control Policy.
     * @param {String} flavor The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;.
     * @param {Object} opts Optional parameters
     * @param {module:model/OryAccessControlPolicy} opts.body
     * @param {module:api/EnginesApi~upsertOryAccessControlPolicyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.upsertOryAccessControlPolicy = function(ID, flavor, opts, callback) {
      opts = opts || {}
      var postBody = opts['body']

      // verify the required parameter 'ID' is set
      if (ID === undefined || ID === null) {
        throw new Error(
          "Missing the required parameter 'ID' when calling upsertOryAccessControlPolicy"
        )
      }

      // verify the required parameter 'flavor' is set
      if (flavor === undefined || flavor === null) {
        throw new Error(
          "Missing the required parameter 'flavor' when calling upsertOryAccessControlPolicy"
        )
      }

      var pathParams = {
        ID: ID,
        flavor: flavor
      }
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = []
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = null

      return this.apiClient.callApi(
        '/engines/ory/{flavor}/policies',
        'PUT',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the upsertOryAccessControlPolicyRole operation.
     * @callback module:api/EnginesApi~upsertOryAccessControlPolicyRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OryAccessControlPolicyRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upsert an ORY Access Control Policy Role
     * Roles group several subjects into one. Rules can be assigned to ORY Access Control Policy (OACP) by using the Role ID as subject in the OACP.
     * @param {String} ID The ID of the ORY Access Control Policy Role.
     * @param {String} flavor The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;.
     * @param {Object} opts Optional parameters
     * @param {module:model/OryAccessControlPolicyRole} opts.body
     * @param {module:api/EnginesApi~upsertOryAccessControlPolicyRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OryAccessControlPolicyRole}
     */
    this.upsertOryAccessControlPolicyRole = function(
      ID,
      flavor,
      opts,
      callback
    ) {
      opts = opts || {}
      var postBody = opts['body']

      // verify the required parameter 'ID' is set
      if (ID === undefined || ID === null) {
        throw new Error(
          "Missing the required parameter 'ID' when calling upsertOryAccessControlPolicyRole"
        )
      }

      // verify the required parameter 'flavor' is set
      if (flavor === undefined || flavor === null) {
        throw new Error(
          "Missing the required parameter 'flavor' when calling upsertOryAccessControlPolicyRole"
        )
      }

      var pathParams = {
        ID: ID,
        flavor: flavor
      }
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = []
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = OryAccessControlPolicyRole

      return this.apiClient.callApi(
        '/engines/ory/{flavor}/roles',
        'PUT',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }
  }

  return exports
})
