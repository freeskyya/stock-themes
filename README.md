# Stock Themes Dashboard

一個用來放股票 / 產業主題分析的靜態網站，目前第一個主題是：

- 70 人 SoC design house 導入 agent 後，對 CPU / server infrastructure 的預算需求分析

## 本機開啟

如果你在本機預覽：

```bash
cd stock-themes
python3 -m http.server 8792
```

然後打開：

- <http://127.0.0.1:8792>

## GitHub Pages

這個專案是純前端靜態網站，可直接放到 GitHub Pages。

### 最簡單做法

1. 建立 GitHub repo
2. 把 `stock-themes/` 內容推上去
3. 在 GitHub repo 設定中開啟 **Pages**
4. Source 選擇：
   - **Deploy from a branch**
   - branch: `main`
   - folder: `/ (root)`

之後網址通常會像：

- `https://<your-username>.github.io/<repo-name>/`

## 檔案

- `index.html`：主頁
- `styles.css`：樣式
- `app.js`：前端互動

## 後續擴充方向

- 主題 2：AMD 2026–2028 營收情境
- 主題 3：CPU / GPU / memory 受惠鏈比較
- 加圖表、slider、互動式情境分析
