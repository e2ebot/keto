<?php
/**
 * EngineApi
 * PHP version 5
 *
 * @category Class
 * @package  keto\SDK
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Package main ORY Keto
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.sh
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 *
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace keto\SDK\Api;

use \keto\SDK\ApiClient;
use \keto\SDK\ApiException;
use \keto\SDK\Configuration;
use \keto\SDK\ObjectSerializer;

/**
 * EngineApi Class Doc Comment
 *
 * @category Class
 * @package  keto\SDK
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class EngineApi
{
    /**
     * API Client
     *
     * @var \keto\SDK\ApiClient instance of the ApiClient
     */
    protected $apiClient;

    /**
     * Constructor
     *
     * @param \keto\SDK\ApiClient|null $apiClient The api client to use
     */
    public function __construct(\keto\SDK\ApiClient $apiClient = null)
    {
        if ($apiClient === null) {
            $apiClient = new ApiClient();
        }

        $this->apiClient = $apiClient;
    }

    /**
     * Get API client
     *
     * @return \keto\SDK\ApiClient get the API client
     */
    public function getApiClient()
    {
        return $this->apiClient;
    }

    /**
     * Set the API client
     *
     * @param \keto\SDK\ApiClient $apiClient set the API client
     *
     * @return EngineApi
     */
    public function setApiClient(\keto\SDK\ApiClient $apiClient)
    {
        $this->apiClient = $apiClient;
        return $this;
    }

    /**
     * Operation listOryAccessControlPolicyRoles
     *
     * List ORY Access Control Policy Roles
     *
     * Client for keto
     *
     * @param string $flavor The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot; (required)
     * @param int $limit The maximum amount of policies returned. (optional)
     * @param int $offset The offset from where to start looking. (optional)
     * @throws \keto\SDK\ApiException on non-2xx response
     * @return \keto\SDK\Model\OryAccessControlPolicyRoles
     */
    public function listOryAccessControlPolicyRoles($flavor, $limit = null, $offset = null)
    {
        list($response) = $this->listOryAccessControlPolicyRolesWithHttpInfo($flavor, $limit, $offset);
        return $response;
    }

    /**
     * Operation listOryAccessControlPolicyRolesWithHttpInfo
     *
     * List ORY Access Control Policy Roles
     *
     * Client for keto
     *
     * @param string $flavor The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot; (required)
     * @param int $limit The maximum amount of policies returned. (optional)
     * @param int $offset The offset from where to start looking. (optional)
     * @throws \keto\SDK\ApiException on non-2xx response
     * @return array of \keto\SDK\Model\OryAccessControlPolicyRoles, HTTP status code, HTTP response headers (array of strings)
     */
    public function listOryAccessControlPolicyRolesWithHttpInfo($flavor, $limit = null, $offset = null)
    {
        // verify the required parameter 'flavor' is set
        if ($flavor === null) {
            throw new \InvalidArgumentException('Missing the required parameter $flavor when calling listOryAccessControlPolicyRoles');
        }
        // parse inputs
        $resourcePath = "/engines/ory/{flavor}/roles";
        $httpBody = '';
        $queryParams = [];
        $headerParams = [];
        $formParams = [];
        $_header_accept = $this->apiClient->selectHeaderAccept(['application/json']);
        if (!is_null($_header_accept)) {
            $headerParams['Accept'] = $_header_accept;
        }
        $headerParams['Content-Type'] = $this->apiClient->selectHeaderContentType(['application/json']);

        // query params
        if ($limit !== null) {
            $queryParams['limit'] = $this->apiClient->getSerializer()->toQueryValue($limit);
        }
        // query params
        if ($offset !== null) {
            $queryParams['offset'] = $this->apiClient->getSerializer()->toQueryValue($offset);
        }
        // path params
        if ($flavor !== null) {
            $resourcePath = str_replace(
                "{" . "flavor" . "}",
                $this->apiClient->getSerializer()->toPathValue($flavor),
                $resourcePath
            );
        }

        // for model (json/xml)
        if (isset($_tempBody)) {
            $httpBody = $_tempBody; // $_tempBody is the method argument, if present
        } elseif (count($formParams) > 0) {
            $httpBody = $formParams; // for HTTP post (form)
        }
        // make the API Call
        try {
            list($response, $statusCode, $httpHeader) = $this->apiClient->callApi(
                $resourcePath,
                'GET',
                $queryParams,
                $httpBody,
                $headerParams,
                '\keto\SDK\Model\OryAccessControlPolicyRoles',
                '/engines/ory/{flavor}/roles'
            );

            return [$this->apiClient->getSerializer()->deserialize($response, '\keto\SDK\Model\OryAccessControlPolicyRoles', $httpHeader), $statusCode, $httpHeader];
        } catch (ApiException $e) {
            switch ($e->getCode()) {
                case 200:
                    $data = $this->apiClient->getSerializer()->deserialize($e->getResponseBody(), '\keto\SDK\Model\OryAccessControlPolicyRoles', $e->getResponseHeaders());
                    $e->setResponseObject($data);
                    break;
                case 500:
                    $data = $this->apiClient->getSerializer()->deserialize($e->getResponseBody(), '\keto\SDK\Model\InlineResponse500', $e->getResponseHeaders());
                    $e->setResponseObject($data);
                    break;
            }

            throw $e;
        }
    }
}
