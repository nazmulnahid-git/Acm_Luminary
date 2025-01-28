import { cloudinary } from "../lib/cloudinary";
import { supabase } from "../lib/supabase";

export const createOrUpdatePost = async (post) => {
  try {
    if (post.file && typeof post.file === 'object') {
      let url;
      if (post.file.type == 'image') {
        url = await cloudinary.uploadImage(post.file.base64);
        if (!url) throw new Error('Image upload failed'); 
      } else if (post.file.type == 'video') {
        url = await cloudinary.uploadVideo(post.file.uri);
        if (!url) throw new Error('Video upload failed'); 
      }
      post.file = url;
    }
    console.log(post);
    const {data, error} = await supabase.from('posts').upsert(post).select().single();
    if (error) {
      return {success: false};
    }
    return {success: true, data};
  } catch (error) {
    ToastAndroid.show('Post Failed', ToastAndroid.SHORT);
    return {success: false};
  }
}