import { type LoginInfo } from '../../models/types/auth'
import { useFakeLogin } from '../../util/fake/useFakeLogin'

export default function useLoginUser (): (loginInfo: LoginInfo) => boolean {
  // For testing pourposes we return the fake login
  return useFakeLogin
}
