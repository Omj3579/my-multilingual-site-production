# cPanel SSH Setup for GitHub - Sybell Hosting (No Terminal Access)

## Important: Your hosting plan doesn't include cPanel Terminal access
This is normal for many shared hosting plans. We'll use the SSH Access interface instead.

## Step 1: Use SSH Access Interface

1. **Log into your cPanel** (cpanel17.sybell.hu:2083)
2. **Click "SSH Access"** in Security section
3. **Look for one of these options**:
   - "Generate a New Key Pair"
   - "Manage SSH Keys" 
   - "Public Keys"
   - "Private Keys"

## Step 2: Generate SSH Key via cPanel Interface

### If you see "Generate a New Key Pair":
1. **Key Name**: `my-multilingual-site`
2. **Key Type**: RSA
3. **Key Size**: 4096 (if available, otherwise use default)
4. **Passphrase**: Leave empty
5. Click "Generate Key Pair"

### If you see "Manage SSH Keys":
1. Click "Generate a New Key"
2. Fill in similar details as above

## Step 3: Download/Copy the Public Key

After generation:
1. **Find your key** in the list
2. **Click "View" or "Download"** next to the public key
3. **Copy the entire content** (starts with `ssh-rsa`)

## Alternative Method: Generate Keys Locally

If cPanel SSH interface doesn't allow key generation, generate them on your local computer:

### On Windows (PowerShell):
```powershell
# Generate SSH key
ssh-keygen -t rsa -f "$env:USERPROFILE\.ssh\my-multilingual-site" -b 4096 -C "your-email@flair-plastic.com"

# Display public key
Get-Content "$env:USERPROFILE\.ssh\my-multilingual-site.pub"
```

### On Windows (Git Bash):
```bash
# Generate SSH key
ssh-keygen -t rsa -f ~/.ssh/my-multilingual-site -b 4096 -C "your-email@flair-plastic.com"

# Display public key
cat ~/.ssh/my-multilingual-site.pub
```

## Step 4: Upload Private Key to cPanel (if generated locally)

If you generated keys locally:
1. **Go to SSH Access** in cPanel
2. **Look for "Import Key" or "Upload Private Key"**
3. **Upload the private key file** (`my-multilingual-site` without .pub extension)

## Step 5: Add Public Key to GitHub

1. **Go to GitHub.com** → Settings → SSH and GPG keys
2. **Click "New SSH key"**
3. **Title**: `Sybell cPanel - flair-plastic.com`
4. **Key type**: Authentication Key  
5. **Paste the public key** (entire content starting with `ssh-rsa`)
6. **Click "Add SSH key"**

## Step 6: Test Connection (Alternative Methods)

Since you don't have terminal access, testing the SSH connection is harder, but you can:

1. **Try the Git clone directly** in Git Version Control
2. **Contact Sybell support** if you get SSH errors
3. **Use the SSH client on your local machine** to test:

```bash
ssh -i path/to/your/private/key -T git@github.com
```

## Step 7: Configure Git Repository

Use these settings in **cPanel Git Version Control**:

```
Clone URL: git@github.com:Omj3579/my-multilingual-site.git
Repository Path: /home2/flairpla/flair-plastic.com/
Repository Name: my-multilingual-site
```

## If SSH Still Doesn't Work: HTTPS Alternative

As a last resort, you can make your GitHub repository public temporarily:

1. **Go to GitHub** → Repository Settings → General
2. **Scroll to "Danger Zone"** 
3. **Change visibility to Public** (temporary)
4. **Use HTTPS URL**: `https://github.com/Omj3579/my-multilingual-site.git`
5. **After successful deployment, change back to Private**

## Contact Sybell Support

If none of these work, contact Sybell support and ask:
- "Can you help me set up SSH keys for GitHub access?"
- "Do you support SSH key generation for Git repositories?"
- "What's the best way to clone private GitHub repositories?"
