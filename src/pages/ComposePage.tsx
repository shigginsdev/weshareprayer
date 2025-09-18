import Composer from '../components/Composer';

export default function ComposePage() {
  const handlePost = (text: string) => {
    // TODO: call your API / mutation here
    console.log('posting:', text);
  };

  return <Composer onPost={handlePost} />;
}
