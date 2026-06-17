Your site stopped because Nginx is not running. The key line is:

```text
host not found in upstream "cdn..."
nginx: configuration file /etc/nginx/nginx.conf test failed
```

That means Nginx has a config line pointing to an upstream hostname starting with `cdn...`, and that hostname does not resolve. Because Nginx config test failed, Nginx refused to start, so visitors get `connection refused`.

Why it worked for days: Nginx had already been running for `4d 16h`. The bad config may have been saved earlier, but it only killed the site when Nginx restarted/reloaded today at `06:31`.

Recovery steps:

1. Show the full exact error:

```bash
sudo nginx -t
```

2. Find the broken `cdn...` line:

```bash
sudo grep -R "cdn\." -n /etc/nginx/nginx.conf /etc/nginx/sites-enabled /etc/nginx/conf.d
```

3. Edit the file it reports:

```bash
sudo nano /path/to/the/file
```

4. If this is your main app site, the proxy should probably be this, not `cdn...`:

```nginx
proxy_pass http://localhost:3000;
```

5. Test and restart:

```bash
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl status nginx
```

If you paste the output of `sudo nginx -t` and the `grep` command, I can tell you the exact line to change.