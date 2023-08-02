const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow flex dark:bg-gray-800 dark:border-gray-600">
      <span className="block text-sm text-gray-500 dark:text-gray-400">
        © 2023{' '}
        <a href="https://flowbite.com/" className="hover:underline">
          Daniel Moreno
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
