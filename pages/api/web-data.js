export default async function handler(req, res) {
    try {
        res.status(200).json({
            "code": "0000",
            "message": "Success.",
            "data": {
                "site_title": "雲端數位科技有限公司",
                "system_url": "http://www.minmax.tw",
                "system_logo": [{
                    "path": "http://site.test/files/images/demo.jpg",
                    "title": null,
                    "media": null,
                    "autoplay": 0,
                    "device": "all",
                    "cover": 0
                }],
                "company_name": "雲端數位科技有限公司",
                "company_nickname": "MINMAX",
                "company_vat": "24241872",
                "contact_phone": "+886-4-51201314",
                "contact_fax": "+886-4-51209999",
                "contact_email": "service@site.test",
                "contact_address": "台中市北屯區崇德路X段N號R樓",
                "contact_map": "https://g.page/minmaxeric",
                "social_facebook": "https://www.facebook.com/minmaxeric",
                "social_instagram": "https://www.instagram.com",
                "social_youtube": "https://www.youtube.com",
                "social_line": "https://line.me/s/test",
                "meta_description": "Website SEO description text",
                "meta_keywords": "minmax,design,website",
                "custom_head": null,
                "custom_body": null,
                "custom_foot": null,
                "cookie_eula": "<p>我們的網站會透過瀏覽器 Cookies 提供您客製化操作體驗、社群媒體功能，並會透過其分析網站流量等統計數據，若繼續使用本網站，代表您同意我們使用瀏覽器 Cookies 為您提供服務。《<a href=\"#\">了解更多</a>》</p>",
                "offline_text": "網站正在維護中，很快就會回來，請稍候一下。"
            }
        })
    } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
    }

}