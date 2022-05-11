import { useToast } from 'vue-toast-notification'
const toast = useToast()

export default {
  actions: {
    toastSuccess ({ state, commit, dispatch }, msg) {
      toast.success(msg)
    },
    toastInfo ({ state, commit, dispatch }, msg) {
      toast.info(msg)
    }
  }
}
