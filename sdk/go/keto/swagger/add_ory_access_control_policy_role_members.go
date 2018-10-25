/* 
 * Package main ORY Keto
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.sh
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

type AddOryAccessControlPolicyRoleMembers struct {

	Body AddOryAccessControlPolicyRoleMembersBody `json:"Body,omitempty"`

	// The ORY Access Control Policy flavor. Can be \"regex\" and \"exact\".  in: path
	Flavor string `json:"flavor"`

	// The ID of the ORY Access Control Policy Role.  in: path
	Id string `json:"id"`
}
