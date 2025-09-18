// src/pages/HomePage.tsx
import Post from '../components/Post'

export default function HomePage() {
  // In reality you’d fetch these IDs from DynamoDB / API
  const postIds = ['p100', 'p200', 'p201', 'p202', 'p203']

  return (
    <div>
      <h1>Feed</h1>
      {postIds.map((id) => (
        <Post
          key={id}
          postId={id}
          onPrayed={(pid) => console.log('prayed on', pid)}
        />
      ))}
    </div>
  )
}
