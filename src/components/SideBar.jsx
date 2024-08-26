export default function SideBar(props) {
  const { handleToogleModal, data } = props;
  return (
    <div className='sidebar'>
      <div onClick={handleToogleModal} className='bgOverlay'></div>
      <div className='sidebarContents'>
        <h2>{data?.title}</h2>
        <div className='descriptionContainer'>
          <p className='descriptionTitle'>{data?.date}</p>
          <p className='descriptionExplanation'>{data?.explanation}</p>
        </div>
        <button onClick={handleToogleModal}>
          <i className='fa-solid fa-arrow-right'></i>
        </button>

        <div className='header'>
          <a
            href='https://apod.nasa.gov/apod/'
            target='_blank'
            rel='noopener noreferrer'
            className='nasalogo'
          >
            <i className='fa-solid fa-user-astronaut'></i>
          </a>

          <span className='name'>
            <i className='fa-brands fa-github'></i> amarkng
          </span>
        </div>
      </div>
    </div>
  );
}
