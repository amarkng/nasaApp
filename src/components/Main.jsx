export default function Main(props) {
  const { data } = props;

  const isVideo = data?.media_type === 'video';
  const imgUrl = isVideo ? data.thumbnail_url : data.hdurl;

  return (
    <div className='imgContainer'>
      <img src={imgUrl} alt={data.title || 'bg-img'} className='bgImg' />
    </div>
  );
}
