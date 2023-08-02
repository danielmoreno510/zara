const InputSearch: React.FC<{ value: string; setValue: (value: string) => void }> = ({ value, setValue }) => (
  <div>
    <input
      className="h-10 w-60 border border-zinc-400 rounded shadow-md p-2 pt-4 pb-4 outline-0 text-zinc-600"
      type="text"
      placeholder="Filter Podcast..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
);

export default InputSearch;
