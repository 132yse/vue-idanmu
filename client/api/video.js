import axios from 'axios'

const request = axios.create({
  baseURL: 'https://api.chinko.cc'
})

// 根据pid查找评论
export function getVideos(pid, page, pageSize) {
  return request.get('/videos', {
    params: {
      pid: pid,
      page,
      pageSize
    }
  })
}

// 添加视频
export function addVideo(oid, title, content, pid, uid) {
  return request.post('/video/add', {
    oid: parseInt(oid),
    title,
    content,
    pid: parseInt(pid),
    uid
  })
}

// 删除评论
export function deleteComment() {
  return request.delete('/comment/delete')
}