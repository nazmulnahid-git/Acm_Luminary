import { cloudinaryCloudName, cloudinaryUploadPreset } from '../constants';

export const cloudinary = {
  uploadImage: async (base64Data) => {
    if (!base64Data) return null;
    try {
      const mimeType = getMimeType(base64Data);
      const formData = new FormData();
      formData.append('file', `data:${mimeType};base64,${base64Data}`);
      formData.append('upload_preset', `${cloudinaryUploadPreset}`);
      formData.append('cloud_name', 'drifdisby');
  
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });
    
      const data = await response.json();
      if (data.secure_url) return data.secure_url;
      return null;
    } catch (error) {
      console.log('Error in uploading image', error);
      return null;
    }
  },
  uploadVideo: async (videoUri) => {
    if (!videoUri) return null;
    try {
      const formData = new FormData();
      formData.append('file', videoUri);
      formData.append('upload_preset', `${cloudinaryUploadPreset}`);
      formData.append('cloud_name', 'drifdisby');

      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/video/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.secure_url) return data.secure_url;
      return null;
    } catch (error) {
      console.log('Error in uploading video', error);
      return null;
    }
  },
}

const getMimeType = (base64)=> {
  const signatures = {
    JVBERi0: 'application/pdf',
    R0lGODdh: 'image/gif',
    R0lGODlh: 'image/gif',
    iVBORw0KGgo: 'image/png',
    '/9j/': 'image/jpeg',
  };
  for(const sign in signatures)if(base64.startsWith(sign)) return signatures[sign];
}