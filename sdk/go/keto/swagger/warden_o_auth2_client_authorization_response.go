/*
 * Package main ORY Keto
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

type WardenOAuth2ClientAuthorizationResponse struct {

	// Allowed is true if the request is allowed and false otherwise.
	Allowed bool `json:"allowed,omitempty"`

	// Subject is the identity that authorized issuing the token, for example a user or an OAuth2 app. This is usually a uuid but you can choose a urn or some other id too.
	Sub string `json:"sub,omitempty"`
}
