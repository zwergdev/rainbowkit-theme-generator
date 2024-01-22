export const ActionButton = ({
  title,
  icon,
}: { title: string; icon: JSX.Element }) => {
  return (
    <button
      type="button"
      className="w-full p-2 flex flex-col items-center justify-center gap-px bg-profile-action rounded-xs hover:scale-[1.025] transition-all duration-150 hover:bg-profile-hover"
    >
      <div className="leading-none">{icon}</div>
      {title}
    </button>
  )
}
