# Bluesky Posts Embed

This project lets you embed Bluesky posts or feeds into any website (including WordPress) using a lightweight widget and an oEmbed endpoint.

---

## 🚀 How it works

- **index.html** → renders a feed of Bluesky posts inside an iframe.  
- **main.ts (Deno)** → serves a dynamic `/oembed` endpoint so platforms like WordPress know how to embed it.  
- WordPress or any oEmbed consumer just needs your page URL — the rest happens automatically.

---

## 🔧 Usage

### Embed a feed

Use this URL format:

```
https://tizz98.github.io/bluesky-posts-embed/?handle=USERNAME&hashtags=tag1,tag2&count=10
```

**Parameters:**

- `handle` → your Bluesky handle (e.g. `elijah.soy`)  
- `hashtags` → optional, comma-separated hashtags to filter posts  
- `count` → optional, number of posts to show (1–30)  
- `layout` → optional, `list` or `grid`  
- `title` → optional, custom header title  
- `hideHeader=true` → optional, hide the widget header  

**Example:**

```
https://tizz98.github.io/bluesky-posts-embed/?handle=elijah.soy&hashtags=quotes,web&count=10
```

---

### WordPress / oEmbed

1. Copy your widget URL (like the example above).  
2. Paste it directly into a WordPress post or page.  
3. WordPress will fetch embed info from the oEmbed endpoint:

```
https://elijahwilso-bluesky-pos-91.deno.dev/oembed?url=YOUR_WIDGET_URL
```

4. The widget will render inside an iframe automatically.

---

## 💻 Local development

- Open `index.html` in a browser and pass query parameters to test feeds.  
- Example:  

```
file:///path/to/index.html?handle=USERNAME&count=5
```

---

## 📜 License

MIT