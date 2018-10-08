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
    define(['ApiClient'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'))
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {}
    }
    root.SwaggerJsClient.AddOryAccessControlPolicyRoleMembersBody = factory(
      root.SwaggerJsClient.ApiClient
    )
  }
})(this, function(ApiClient) {
  'use strict'

  /**
   * The AddOryAccessControlPolicyRoleMembersBody model module.
   * @module model/AddOryAccessControlPolicyRoleMembersBody
   * @version Latest
   */

  /**
   * Constructs a new <code>AddOryAccessControlPolicyRoleMembersBody</code>.
   * @alias module:model/AddOryAccessControlPolicyRoleMembersBody
   * @class
   */
  var exports = function() {
    var _this = this
  }

  /**
   * Constructs a <code>AddOryAccessControlPolicyRoleMembersBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddOryAccessControlPolicyRoleMembersBody} obj Optional instance to populate.
   * @return {module:model/AddOryAccessControlPolicyRoleMembersBody} The populated <code>AddOryAccessControlPolicyRoleMembersBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()

      if (data.hasOwnProperty('members')) {
        obj['members'] = ApiClient.convertToType(data['members'], ['String'])
      }
    }
    return obj
  }

  /**
   * The members to be added.
   * @member {Array.<String>} members
   */
  exports.prototype['members'] = undefined

  return exports
})
