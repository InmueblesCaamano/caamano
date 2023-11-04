import { create } from 'zustand'
import collapsefn from './nav/nav'
const useStore = create((set) => ({
  isCollapsed: true,
  collapse: () => collapsefn(set)
}))

export default useStore