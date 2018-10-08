/*
 * Package main ORY Keto
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.sh
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

type DeleteOryAccessControlPolicyRole struct {

	// The ID of the ORY Access Control Policy Role. in: path
	ID string `json:"ID"`

	// The ORY Access Control Policy flavor. Can be \"regex\" and \"exact\".  in: path
	Flavor string `json:"flavor"`
}
