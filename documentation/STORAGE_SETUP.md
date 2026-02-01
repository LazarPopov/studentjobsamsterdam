# Supabase Storage Setup for Logo Uploads

## Overview

This guide will help you set up Supabase Storage to handle company logo uploads for the employer job submission form.

## Features

✅ **File upload with validation**
- Maximum file size: 2MB
- Allowed formats: JPG, PNG, WebP
- Client-side and server-side validation
- Image preview before submission

✅ **Secure storage**
- Files stored in Supabase Storage bucket
- Public access for approved logos
- Automatic unique filename generation

## Step 1: Create Storage Bucket

1. Go to your Supabase project dashboard
2. Click on **Storage** in the left sidebar
3. Click **"New bucket"**
4. Enter the following details:
   - **Name**: `employer-logos`
   - **Public bucket**: ✅ Yes (check this box)
   - **File size limit**: 2MB
   - **Allowed MIME types**: `image/jpeg,image/jpg,image/png,image/webp`

5. Click **"Create bucket"**

## Step 2: Set Up Storage Policies

The bucket needs to be configured to allow:
- ✅ Public uploads (for anonymous form submissions)
- ✅ Public reads (to display logos)
- ✅ Authenticated updates/deletes (for admin management)

### Option A: Using the Dashboard

1. In Storage, click on your `employer-logos` bucket
2. Go to **Policies** tab
3. Click **"New policy"**

**Policy 1: Allow Public Uploads**
```
Policy name: Allow public uploads
Allowed operation: INSERT
Target roles: public
Policy definition: true
```

**Policy 2: Allow Public Reads**
```
Policy name: Allow public reads
Allowed operation: SELECT
Target roles: public
Policy definition: true
```

**Policy 3: Allow Authenticated Deletes** (for admin cleanup)
```
Policy name: Allow authenticated deletes
Allowed operation: DELETE
Target roles: authenticated
Policy definition: true
```

### Option B: Using SQL (Advanced)

Run this in the SQL Editor:

```sql
-- Enable public uploads
CREATE POLICY "Allow public uploads"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'employer-logos');

-- Enable public reads
CREATE POLICY "Allow public reads"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'employer-logos');

-- Enable authenticated deletes (for admin)
CREATE POLICY "Allow authenticated deletes"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'employer-logos');

-- Optional: Enable authenticated updates
CREATE POLICY "Allow authenticated updates"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'employer-logos')
WITH CHECK (bucket_id = 'employer-logos');
```

## Step 3: Configure CORS (if needed)

If you're testing from localhost or a different domain:

1. Go to **Settings** → **API**
2. Scroll to **CORS**
3. Add your domain (e.g., `http://localhost:3000`)

## Step 4: Test the Upload

1. Start your dev server: `npm run dev`
2. Go to `http://localhost:3000/employers`
3. Fill out the form
4. Upload a logo (JPG/PNG/WebP, max 2MB)
5. Submit the form
6. Check Supabase Storage → `employer-logos` bucket for the uploaded file

## File Naming Convention

Uploaded files are automatically named using this pattern:
```
{company-name-sanitized}-{timestamp}.{extension}

Examples:
- acme-corp-1699123456789.jpg
- blue-sky-media-1699123567890.png
```

## Validation Rules

### Client-Side (Form)
- ✅ File type validation
- ✅ File size validation (2MB max)
- ✅ Image preview
- ✅ Visual error messages

### Server-Side (API)
- ✅ File type validation
- ✅ File size validation
- ✅ Safe filename generation
- ✅ Error handling

## File Constraints

| Constraint | Value |
|------------|-------|
| Max file size | 2MB (2,097,152 bytes) |
| Allowed types | JPG, JPEG, PNG, WebP |
| Recommended dimensions | 200x200px or larger |
| Recommended format | Square (1:1 ratio) |

## Storage Structure

```
employer-logos/
├── acme-corp-1699123456789.jpg
├── blue-sky-media-1699123567890.png
├── coffee-shop-1699123678901.webp
└── ...
```

## Integration with Database

When a logo is uploaded:
1. File is validated on the client
2. File is sent with form data
3. Server validates file again
4. File is uploaded to Supabase Storage
5. Public URL is returned
6. URL is saved in `employer_job_submissions.logo_url`

## Cleanup & Management

### View all logos:
```sql
SELECT name, created_at, metadata
FROM storage.objects
WHERE bucket_id = 'employer-logos'
ORDER BY created_at DESC;
```

### Delete old/rejected logos:
```sql
-- Use the deleteLogo function from src/lib/storage.ts
-- Or manually delete from Storage dashboard
```

### Get storage usage:
```sql
SELECT 
  COUNT(*) as total_files,
  SUM((metadata->>'size')::bigint) as total_size_bytes,
  SUM((metadata->>'size')::bigint) / 1024 / 1024 as total_size_mb
FROM storage.objects
WHERE bucket_id = 'employer-logos';
```

## Troubleshooting

### "Failed to upload logo"
- ✅ Check bucket exists and is named `employer-logos`
- ✅ Verify bucket is set to **public**
- ✅ Check storage policies are enabled
- ✅ Verify file size is under 2MB
- ✅ Check file type is JPG/PNG/WebP

### "Permission denied"
- ✅ Ensure bucket policies are set correctly
- ✅ Check CORS settings if testing from localhost
- ✅ Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set

### Images not displaying
- ✅ Bucket must be set to **public**
- ✅ Check the URL format: `https://[project-id].supabase.co/storage/v1/object/public/employer-logos/[filename]`
- ✅ Verify file was actually uploaded (check Storage dashboard)

### File size errors
- ✅ Compress images before upload
- ✅ Use tools like TinyPNG, ImageOptim, or Squoosh
- ✅ Convert to WebP for better compression

## Security Notes

⚠️ **Important Security Considerations:**

1. **File validation** is performed both client and server-side
2. **Filenames are sanitized** to prevent injection attacks
3. **Unique timestamps** prevent filename collisions
4. **MIME type checking** prevents malicious file uploads
5. **Size limits** prevent storage abuse
6. **Public bucket** means anyone can view uploaded logos (intended behavior)

## Future Enhancements

Consider adding:
- [ ] Image compression/optimization on upload
- [ ] Automatic thumbnail generation
- [ ] Image cropping/editing before upload
- [ ] Multiple logo variants (different sizes)
- [ ] CDN integration for faster delivery
- [ ] Automatic cleanup of rejected submissions
- [ ] Virus scanning for uploaded files

## Cost Considerations

Supabase Storage pricing (as of 2026):
- **Free tier**: 1GB storage, 2GB bandwidth
- **Pro tier**: 100GB storage, 200GB bandwidth

Each 2MB logo counts toward your storage quota. With free tier:
- ~500 logos can be stored
- Monitor usage in Supabase Dashboard → Settings → Usage

## Next Steps

After setup:
1. ✅ Test logo upload on dev environment
2. ✅ Submit test job with logo
3. ✅ Verify logo appears in Storage bucket
4. ✅ Check logo URL is saved in database
5. ✅ Deploy to production
6. ✅ Monitor storage usage

Need help? Check:
- [Supabase Storage Docs](https://supabase.com/docs/guides/storage)
- [Storage Policies Guide](https://supabase.com/docs/guides/storage/security/access-control)

