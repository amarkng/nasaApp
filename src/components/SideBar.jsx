export default function SideBar(props) {
  const { handleToogleModal, data } = props;
  return (
    <div className='sidebar'>
      <div onClick={handleToogleModal} className='bgOverlay'></div>
      <div className='sidebarContents'>
        <h2>{data?.title}</h2>
        <div className='descriptionContainer'>
          <p className='descriptionTitle'>{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToogleModal}>
          <i className='fa-solid fa-arrow-right'></i>
        </button>

        <span className='name'>
          {' '}
          <i class='fa-brands fa-github'></i> amarkng{' '}
        </span>
      </div>
    </div>
  );
}
