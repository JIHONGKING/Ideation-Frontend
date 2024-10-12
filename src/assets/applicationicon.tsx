export default function ApplicationIcon({ className }: { className: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.8 3.6H0V16.2C0 17.19 0.81 18 1.8 18H14.4V16.2H1.8V3.6ZM16.2 0H5.4C4.41 0 3.6 0.81 3.6 1.8V12.6C3.6 13.59 4.41 14.4 5.4 14.4H16.2C17.19 14.4 18 13.59 18 12.6V1.8C18 0.81 17.19 0 16.2 0ZM15.3 8.1H6.3V6.3H15.3V8.1ZM11.7 11.7H6.3V9.9H11.7V11.7ZM15.3 4.5H6.3V2.7H15.3V4.5Z"
        className={className}
      />
    </svg>
  );
}
