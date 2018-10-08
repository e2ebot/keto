# keto\SDK\EnginesApi
Client for keto

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOryAccessControlPolicyRoleMembers**](EnginesApi.md#addOryAccessControlPolicyRoleMembers) | **PUT** /engines/ory/{flavor}/roles/{id}/members | Add a member to an ORY Access Control Policy Role
[**deleteOryAccessControlPolicy**](EnginesApi.md#deleteOryAccessControlPolicy) | **DELETE** /engines/ory/{flavor}/policies/{id} | 
[**deleteOryAccessControlPolicyRole**](EnginesApi.md#deleteOryAccessControlPolicyRole) | **DELETE** /engines/ory/{flavor}/roles/{id} | Delete an ORY Access Control Policy Role
[**doOryAccessControlPoliciesAllow**](EnginesApi.md#doOryAccessControlPoliciesAllow) | **GET** /engines/ory/{flavor}/allowed | Check if a request is allowed
[**getOryAccessControlPolicy**](EnginesApi.md#getOryAccessControlPolicy) | **GET** /engines/ory/{flavor}/policies/{id} | 
[**getOryAccessControlPolicyRole**](EnginesApi.md#getOryAccessControlPolicyRole) | **GET** /engines/ory/{flavor}/roles/{id} | Get an ORY Access Control Policy Role
[**listOryAccessControlPolicies**](EnginesApi.md#listOryAccessControlPolicies) | **GET** /engines/ory/{flavor}/policies | 
[**removeOryAccessControlPolicyRoleMembers**](EnginesApi.md#removeOryAccessControlPolicyRoleMembers) | **DELETE** /engines/ory/{flavor}/roles/{id}/members | Remove a member from an ORY Access Control Policy Role
[**upsertOryAccessControlPolicy**](EnginesApi.md#upsertOryAccessControlPolicy) | **PUT** /engines/ory/{flavor}/policies | 
[**upsertOryAccessControlPolicyRole**](EnginesApi.md#upsertOryAccessControlPolicyRole) | **PUT** /engines/ory/{flavor}/roles | Upsert an ORY Access Control Policy Role


# **addOryAccessControlPolicyRoleMembers**
> \keto\SDK\Model\OryAccessControlPolicyRole addOryAccessControlPolicyRoleMembers($id, $flavor, $body)

Add a member to an ORY Access Control Policy Role

Roles group several subjects into one. Rules can be assigned to ORY Access Control Policy (OACP) by using the Role ID as subject in the OACP.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new keto\SDK\Api\EnginesApi();
$id = "id_example"; // string | The ID of the ORY Access Control Policy Role.
$flavor = "flavor_example"; // string | The ORY Access Control Policy flavor. Can be \"regex\" and \"exact\".
$body = new \keto\SDK\Model\AddOryAccessControlPolicyRoleMembersBody(); // \keto\SDK\Model\AddOryAccessControlPolicyRoleMembersBody | 

try {
    $result = $api_instance->addOryAccessControlPolicyRoleMembers($id, $flavor, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EnginesApi->addOryAccessControlPolicyRoleMembers: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the ORY Access Control Policy Role. |
 **flavor** | **string**| The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;. |
 **body** | [**\keto\SDK\Model\AddOryAccessControlPolicyRoleMembersBody**](../Model/AddOryAccessControlPolicyRoleMembersBody.md)|  | [optional]

### Return type

[**\keto\SDK\Model\OryAccessControlPolicyRole**](../Model/OryAccessControlPolicyRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteOryAccessControlPolicy**
> deleteOryAccessControlPolicy($flavor, $id)



Delete an ORY Access Control Policy

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new keto\SDK\Api\EnginesApi();
$flavor = "flavor_example"; // string | The ORY Access Control Policy flavor. Can be \"regex\" and \"exact\".
$id = "id_example"; // string | The ID of the ORY Access Control Policy Role.

try {
    $api_instance->deleteOryAccessControlPolicy($flavor, $id);
} catch (Exception $e) {
    echo 'Exception when calling EnginesApi->deleteOryAccessControlPolicy: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flavor** | **string**| The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;. |
 **id** | **string**| The ID of the ORY Access Control Policy Role. |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteOryAccessControlPolicyRole**
> deleteOryAccessControlPolicyRole($flavor, $id)

Delete an ORY Access Control Policy Role

Roles group several subjects into one. Rules can be assigned to ORY Access Control Policy (OACP) by using the Role ID as subject in the OACP.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new keto\SDK\Api\EnginesApi();
$flavor = "flavor_example"; // string | The ORY Access Control Policy flavor. Can be \"regex\" and \"exact\".
$id = "id_example"; // string | The ID of the ORY Access Control Policy Role.

try {
    $api_instance->deleteOryAccessControlPolicyRole($flavor, $id);
} catch (Exception $e) {
    echo 'Exception when calling EnginesApi->deleteOryAccessControlPolicyRole: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flavor** | **string**| The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;. |
 **id** | **string**| The ID of the ORY Access Control Policy Role. |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **doOryAccessControlPoliciesAllow**
> \keto\SDK\Model\AuthorizationResult doOryAccessControlPoliciesAllow($flavor, $body)

Check if a request is allowed

Use this endpoint to check if a request is allowed or not.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new keto\SDK\Api\EnginesApi();
$flavor = "flavor_example"; // string | The ORY Access Control Policy flavor. Can be \"regex\" and \"exact\".
$body = new \keto\SDK\Model\OryAccessControlPolicyAllowedInput(); // \keto\SDK\Model\OryAccessControlPolicyAllowedInput | 

try {
    $result = $api_instance->doOryAccessControlPoliciesAllow($flavor, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EnginesApi->doOryAccessControlPoliciesAllow: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flavor** | **string**| The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;. |
 **body** | [**\keto\SDK\Model\OryAccessControlPolicyAllowedInput**](../Model/OryAccessControlPolicyAllowedInput.md)|  | [optional]

### Return type

[**\keto\SDK\Model\AuthorizationResult**](../Model/AuthorizationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getOryAccessControlPolicy**
> \keto\SDK\Model\OryAccessControlPolicy getOryAccessControlPolicy($flavor, $id)



Get an ORY Access Control Policy

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new keto\SDK\Api\EnginesApi();
$flavor = "flavor_example"; // string | The ORY Access Control Policy flavor. Can be \"regex\" and \"exact\".
$id = "id_example"; // string | The ID of the ORY Access Control Policy Role.

try {
    $result = $api_instance->getOryAccessControlPolicy($flavor, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EnginesApi->getOryAccessControlPolicy: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flavor** | **string**| The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;. |
 **id** | **string**| The ID of the ORY Access Control Policy Role. |

### Return type

[**\keto\SDK\Model\OryAccessControlPolicy**](../Model/OryAccessControlPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getOryAccessControlPolicyRole**
> \keto\SDK\Model\OryAccessControlPolicyRole getOryAccessControlPolicyRole($flavor, $id)

Get an ORY Access Control Policy Role

Roles group several subjects into one. Rules can be assigned to ORY Access Control Policy (OACP) by using the Role ID as subject in the OACP.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new keto\SDK\Api\EnginesApi();
$flavor = "flavor_example"; // string | The ORY Access Control Policy flavor. Can be \"regex\" and \"exact\".
$id = "id_example"; // string | The ID of the ORY Access Control Policy Role.

try {
    $result = $api_instance->getOryAccessControlPolicyRole($flavor, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EnginesApi->getOryAccessControlPolicyRole: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flavor** | **string**| The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;. |
 **id** | **string**| The ID of the ORY Access Control Policy Role. |

### Return type

[**\keto\SDK\Model\OryAccessControlPolicyRole**](../Model/OryAccessControlPolicyRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listOryAccessControlPolicies**
> \keto\SDK\Model\OryAccessControlPolicies listOryAccessControlPolicies($flavor, $limit, $offset)



List ORY Access Control Policies

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new keto\SDK\Api\EnginesApi();
$flavor = "flavor_example"; // string | The ORY Access Control Policy flavor. Can be \"regex\" and \"exact\"
$limit = 789; // int | The maximum amount of policies returned.
$offset = 789; // int | The offset from where to start looking.

try {
    $result = $api_instance->listOryAccessControlPolicies($flavor, $limit, $offset);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EnginesApi->listOryAccessControlPolicies: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flavor** | **string**| The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot; |
 **limit** | **int**| The maximum amount of policies returned. | [optional]
 **offset** | **int**| The offset from where to start looking. | [optional]

### Return type

[**\keto\SDK\Model\OryAccessControlPolicies**](../Model/OryAccessControlPolicies.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **removeOryAccessControlPolicyRoleMembers**
> removeOryAccessControlPolicyRoleMembers($id, $flavor, $body)

Remove a member from an ORY Access Control Policy Role

Roles group several subjects into one. Rules can be assigned to ORY Access Control Policy (OACP) by using the Role ID as subject in the OACP.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new keto\SDK\Api\EnginesApi();
$id = "id_example"; // string | The ID of the ORY Access Control Policy Role.
$flavor = "flavor_example"; // string | The ORY Access Control Policy flavor. Can be \"regex\" and \"exact\".
$body = new \keto\SDK\Model\RemoveOryAccessControlPolicyRoleMembersBody(); // \keto\SDK\Model\RemoveOryAccessControlPolicyRoleMembersBody | 

try {
    $api_instance->removeOryAccessControlPolicyRoleMembers($id, $flavor, $body);
} catch (Exception $e) {
    echo 'Exception when calling EnginesApi->removeOryAccessControlPolicyRoleMembers: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the ORY Access Control Policy Role. |
 **flavor** | **string**| The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;. |
 **body** | [**\keto\SDK\Model\RemoveOryAccessControlPolicyRoleMembersBody**](../Model/RemoveOryAccessControlPolicyRoleMembersBody.md)|  | [optional]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **upsertOryAccessControlPolicy**
> upsertOryAccessControlPolicy($id, $flavor, $body)



Upsert an ORY Access Control Policy

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new keto\SDK\Api\EnginesApi();
$id = "id_example"; // string | The ID of the ORY Access Control Policy.
$flavor = "flavor_example"; // string | The ORY Access Control Policy flavor. Can be \"regex\" and \"exact\".
$body = new \keto\SDK\Model\OryAccessControlPolicy(); // \keto\SDK\Model\OryAccessControlPolicy | 

try {
    $api_instance->upsertOryAccessControlPolicy($id, $flavor, $body);
} catch (Exception $e) {
    echo 'Exception when calling EnginesApi->upsertOryAccessControlPolicy: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the ORY Access Control Policy. |
 **flavor** | **string**| The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;. |
 **body** | [**\keto\SDK\Model\OryAccessControlPolicy**](../Model/OryAccessControlPolicy.md)|  | [optional]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **upsertOryAccessControlPolicyRole**
> \keto\SDK\Model\OryAccessControlPolicyRole upsertOryAccessControlPolicyRole($id, $flavor, $body)

Upsert an ORY Access Control Policy Role

Roles group several subjects into one. Rules can be assigned to ORY Access Control Policy (OACP) by using the Role ID as subject in the OACP.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new keto\SDK\Api\EnginesApi();
$id = "id_example"; // string | The ID of the ORY Access Control Policy Role.
$flavor = "flavor_example"; // string | The ORY Access Control Policy flavor. Can be \"regex\" and \"exact\".
$body = new \keto\SDK\Model\OryAccessControlPolicyRole(); // \keto\SDK\Model\OryAccessControlPolicyRole | 

try {
    $result = $api_instance->upsertOryAccessControlPolicyRole($id, $flavor, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EnginesApi->upsertOryAccessControlPolicyRole: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the ORY Access Control Policy Role. |
 **flavor** | **string**| The ORY Access Control Policy flavor. Can be \&quot;regex\&quot; and \&quot;exact\&quot;. |
 **body** | [**\keto\SDK\Model\OryAccessControlPolicyRole**](../Model/OryAccessControlPolicyRole.md)|  | [optional]

### Return type

[**\keto\SDK\Model\OryAccessControlPolicyRole**](../Model/OryAccessControlPolicyRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
