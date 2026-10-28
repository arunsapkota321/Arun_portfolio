# Arun Sapkota, portfolio site

Live address: https://sapkotaarun.com.np (served by GitHub Pages from the `main` branch).

## What is in this folder

    index.html            all the text of the site
    css/style.css         colours, fonts, layout
    js/main.js            menu, dark mode, copy-email button
    assets/images/profile hero.webp (main photo), portrait.webp (contact photo), avatar.webp (small round photo)
    assets/cv/            Arun_Sapkota_CV.pdf (the download button)
    assets/fonts/         font files (no internet fonts needed)
    CNAME                 tells GitHub the domain is sapkotaarun.com.np (do not delete)

## Put the site online (one time)

1. Sign in to github.com, click **New repository**, name it `arun-portfolio` (or anything), keep it Public, click **Create repository**.
2. Click **uploading an existing file**, drag in everything from this folder (the folders too), then **Commit changes**.
3. Open **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and Save.
4. In the same Pages screen, under **Custom domain**, type `sapkotaarun.com.np` and Save. Tick **Enforce HTTPS** once it becomes available (can take up to a few hours).

## Point the domain at GitHub (at the domain registrar, in the DNS settings)

Add these records for `sapkotaarun.com.np`:

    A      @     185.199.108.153
    A      @     185.199.109.153
    A      @     185.199.110.153
    A      @     185.199.111.153
    CNAME  www   <github-username>.github.io

DNS changes can take a few minutes to a few hours to reach everyone.

## Change the text

1. Open the repository on github.com and click `index.html`.
2. Click the pencil icon (Edit), change the words between the tags, for example `Civil Engineer`.
3. Click **Commit changes**. The live site updates in 1 to 2 minutes (press Ctrl+Shift+R to see it).

Tip: press `Ctrl+F` inside the editor to find the sentence you want to change.

## Change a photo

Same name (easiest): open `assets/images/profile`, click **Add file > Upload files**, upload the new photo with the same name as the old one (for example `hero.webp`), and commit. If you still see the old one, press Ctrl+Shift+R.

New name: upload the new file, then edit `index.html` and change the file name in the matching `<img src="...">` line.

Photo sizes that work well:

    hero.webp      1000 x 1250 pixels (portrait, face in the upper half)
    portrait.webp  900 x 900 pixels (square)
    avatar.webp    160 x 160 pixels (square, face centred)

Use .webp, .jpg or .png and keep each photo under about 400 KB so the page loads fast.

## Change the CV

Replace `assets/cv/Arun_Sapkota_CV.pdf` with the new PDF (same file name).

## Project pictures

Each project in the Projects section can show small figures. Put the image (WebP or JPG, about 1000 px wide) in `assets/images/projects/<project-name>/`, then copy one `<figure>` line inside the project in `index.html` and change the file name and the caption. Clicking a figure on the site opens it larger.
