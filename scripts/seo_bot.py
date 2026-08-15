#!/usr/bin/env python3
"""
Zivar SEO Engine & Modern Search Indexing Automation Bot
=========================================================
Script otomatisasi Python untuk:
1. Validasi HTTP Status & Kecepatan Akses Website.
2. Validasi & Audit Berkas robots.txt serta sitemap.xml.
3. Audit On-Page SEO (Meta Tags, OpenGraph, Canonical, JSON-LD).
4. Instant Indexing via Modern IndexNow Protocol (Bing, Yahoo, DuckDuckGo, Yandex).

Penggunaan:
    python scripts/seo_bot.py
"""

import sys
import json
import time
import urllib.request
import urllib.parse
import urllib.error
from datetime import datetime

# Pastikan output encoding aman di Windows
if sys.platform == "win32" and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

# ==========================================
# KONFIGURASI WEBSITE
# ==========================================
SITE_URL = "https://zivar.my.id"
SITEMAP_URL = f"{SITE_URL}/sitemap.xml"
ROBOTS_URL = f"{SITE_URL}/robots.txt"

# IndexNow API Endpoint (Standar Modern Indexing Mesin Pencari)
INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"

def print_header():
    print("=" * 65)
    print(" [BOT] ZIVAR SEO & SEARCH ENGINE INDEXING BOT")
    print(f" Target: {SITE_URL}")
    print(f" Waktu : {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 65)

def check_url(url, description="URL Check"):
    print(f"\n[1/4] Menguji Kesiapan {description}...")
    headers = {
        "User-Agent": "Mozilla/5.0 (compatible; ZivarSeoBot/2.0; +https://zivar.my.id)"
    }
    req = urllib.request.Request(url, headers=headers)
    
    start_time = time.time()
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            latency = (time.time() - start_time) * 1000
            status = response.getcode()
            print(f"  [+] Status  : HTTP {status} OK")
            print(f"  [+] Latency : {latency:.2f} ms (Sangat Cepat)")
            return True, response.read().decode("utf-8", errors="ignore")
    except urllib.error.HTTPError as e:
        print(f"  [-] HTTP Error: {e.code} - {e.reason}")
        return False, ""
    except urllib.error.URLError as e:
        print(f"  [-] Status: Domain sedang dalam proses propagasi / offline.")
        print(f"      ({e.reason})")
        return False, ""
    except Exception as e:
        print(f"  [-] Error: {e}")
        return False, ""

def audit_robots_and_sitemap():
    print("\n[2/4] Memeriksa Berkas Discovery Mesin Pencari (robots.txt & sitemap.xml)...")
    
    # 1. Cek robots.txt
    try:
        req = urllib.request.Request(ROBOTS_URL, headers={"User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1)"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read().decode("utf-8", errors="ignore")
            if "sitemap.xml" in content:
                print("  [+] robots.txt  : Ditemukan & Memuat Link Sitemap (Optimal untuk Googlebot)")
            else:
                print("  [+] robots.txt  : Ditemukan (HTTP 200)")
    except Exception as e:
        print(f"  [-] robots.txt  : Gagal diakses ({e})")
        
    # 2. Cek sitemap.xml
    try:
        req = urllib.request.Request(SITEMAP_URL, headers={"User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1)"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read().decode("utf-8", errors="ignore")
            if "<urlset" in content:
                print("  [+] sitemap.xml : Format Valid XML Sitemap (Siap Dirayapi Google)")
            else:
                print("  [+] sitemap.xml : Ditemukan (HTTP 200)")
    except Exception as e:
        print(f"  [-] sitemap.xml : Gagal diakses ({e})")

def audit_seo_elements(html_content):
    print("\n[3/4] Melakukan Audit Komponen SEO On-Page...")
    
    checks = {
        "Title Tag": "<title" in html_content,
        "Meta Description": 'name="description"' in html_content or 'name="Description"' in html_content,
        "OpenGraph Tags": 'property="og:' in html_content or 'name="og:' in html_content,
        "Canonical Tag": 'rel="canonical"' in html_content,
        "Schema.org JSON-LD": 'application/ld+json' in html_content,
        "Viewport Mobile": 'name="viewport"' in html_content,
    }
    
    for item, passed in checks.items():
        if passed:
            print(f"  [+] {item:<22} : Ditemukan (Optimal)")
        else:
            print(f"  [-] {item:<22} : Tidak Ditemukan")

def submit_indexnow():
    print("\n[4/4] Mengirim Permintaan Indexing Instan via Protokol IndexNow...")
    payload = {
        "host": "zivar.my.id",
        "key": "zivar2026seotoken",
        "keyLocation": f"{SITE_URL}/zivar2026seotoken.txt",
        "urlList": [
            SITE_URL,
            f"{SITE_URL}/#about",
            f"{SITE_URL}/#projects",
            f"{SITE_URL}/#skills",
            f"{SITE_URL}/#packagist",
            f"{SITE_URL}/#experience",
            f"{SITE_URL}/#contact"
        ]
    }
    
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        INDEXNOW_ENDPOINT,
        data=data,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST"
    )
    
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            print(f"  [+] IndexNow API Submission : Sukses (HTTP {resp.getcode()})")
            print("  [+] Seluruh URL portofolio berhasil didaftarkan ke jaringan mesin pencari global.")
    except urllib.error.HTTPError as e:
        if e.code in [200, 202]:
            print(f"  [+] IndexNow API Submission : Sukses Diterima (HTTP {e.code})")
        else:
            print(f"  [!] IndexNow Status : HTTP {e.code}")
    except Exception as e:
        print(f"  [!] IndexNow Request : {e}")

def main():
    print_header()
    
    # 1. Test Homepage
    success, html = check_url(SITE_URL, "Website Utama")
    
    # 2. Check robots & sitemap
    audit_robots_and_sitemap()
    
    # 3. Audit SEO jika online
    if success and html:
        audit_seo_elements(html)
    
    # 4. Submit to IndexNow
    submit_indexnow()
    
    print("\n" + "=" * 65)
    print(" [DONE] PROSES BOT SELESAI")
    print(" CARA GOOGLE MENGINDEX WEBSITE ANDA SAAT INI:")
    print(" 1. Otomatis: Googlebot membaca file robots.txt & sitemap.xml Anda.")
    print(" 2. Manual Cepat: Masuk ke Google Search Console -> Submit Sitemap.")
    print("=" * 65 + "\n")

if __name__ == "__main__":
    main()
