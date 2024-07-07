export default function WorkIcon({ className }: { className: string }) {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2 3.57895H12.6V1.78947C12.6 0.796316 11.799 0 10.8 0H7.2C6.201 0 5.4 0.796316 5.4 1.78947V3.57895H1.8C0.801 3.57895 0.00899999 4.37526 0.00899999 5.36842L0 15.2105C0 16.2037 0.801 17 1.8 17H16.2C17.199 17 18 16.2037 18 15.2105V5.36842C18 4.37526 17.199 3.57895 16.2 3.57895ZM10.8 3.57895H7.2V1.78947H10.8V3.57895Z"
        className={className}
      />
    </svg>
  );
}
