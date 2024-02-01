const Notifications = () => {
  return (
    <div>
      {[...Array(8)].map((index) => (
        <div
          key={index}
          className="border border-[#d2aefd] py-2 mb-2 px-4 rounded-lg bg-[#eddeff6a] cursor-pointer hover:bg-[#ac6ef8a2] hover:text-white"
        >
          <h2 className="text-md text-[#333333]">New customer register</h2>
          <p className="text-[11px] text-[#A1A1A1]">10 minutes ago</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
