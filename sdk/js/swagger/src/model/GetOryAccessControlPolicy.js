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
    root.SwaggerJsClient.GetOryAccessControlPolicy = factory(
      root.SwaggerJsClient.ApiClient
    )
  }
})(this, function(ApiClient) {
  'use strict'

  /**
   * The GetOryAccessControlPolicy model module.
   * @module model/GetOryAccessControlPolicy
   * @version Latest
   */

  /**
   * Constructs a new <code>GetOryAccessControlPolicy</code>.
   * @alias module:model/GetOryAccessControlPolicy
   * @class
   * @param ID {String} The ID of the ORY Access Control Policy Role.  in: path
   * @param flavor {String} The ORY Access Control Policy flavor. Can be \"regex\" and \"exact\".  in: path
   */
  var exports = function(ID, flavor) {
    var _this = this

    _this['ID'] = ID
    _this['flavor'] = flavor
  }

  /**
   * Constructs a <code>GetOryAccessControlPolicy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetOryAccessControlPolicy} obj Optional instance to populate.
   * @return {module:model/GetOryAccessControlPolicy} The populated <code>GetOryAccessControlPolicy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String')
      }
      if (data.hasOwnProperty('flavor')) {
        obj['flavor'] = ApiClient.convertToType(data['flavor'], 'String')
      }
    }
    return obj
  }

  /**
   * The ID of the ORY Access Control Policy Role.  in: path
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined
  /**
   * The ORY Access Control Policy flavor. Can be \"regex\" and \"exact\".  in: path
   * @member {String} flavor
   */
  exports.prototype['flavor'] = undefined

  return exports
})
