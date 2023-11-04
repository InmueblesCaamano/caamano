export default function collapsefn(set) {
    set((state) => ({
        isCollapsed: !state.isCollapsed
    }))
}