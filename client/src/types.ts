export interface Post {
  identifier: string
  title: string
  body: string
  slug: string
  subname: string
  username: string
  createdAt: string
  updatedAt: string
  //Virtual Fields
  url: string
}
