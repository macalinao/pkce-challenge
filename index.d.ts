// Type definitions for pkce-challenge 2.0
// Project: https://github.com/crouchcd/pkce-challenge
// Definitions by: 
// Tobias Kopelke <https://github.com/lordnox>,
// Cameron Crouch <https://github.com/crouchcd>


declare module 'pkce-challenge' {
  export default function pkceChallenge(length?: number): {
    code_challenge: string;
    code_verifier: string;
  };
}