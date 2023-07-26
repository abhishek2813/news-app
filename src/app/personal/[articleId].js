import React from 'react'
import {useRouter} from 'next/router'
function articleId() {
    const router = useRouter();
    const isGridViewArctical = router.query.articleId;
  return (
    <div>{isGridViewArctical} hey</div>
  )
}

export default articleId