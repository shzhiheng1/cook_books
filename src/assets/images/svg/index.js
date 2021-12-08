const req = require.context('@/assets/images/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
console.log(requireAll(req))