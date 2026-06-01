import { Star } from "lucide-react";
import { Link } from "react-router-dom";
export default function Home() {
  const products = [
  {
    id: 1,
    title: "VASTRADO Men",
    price: "₹6,500",
    save: "₹4,900.00",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSeLy95cHHwxq-dSDRQuGDg9jI8OLSw283bP2vpJWovL3uMC7dwWv0Y6Az1jlEql4pSNImwsko9tETii4wVvsKyN4mxqxlIqnZqHRBTMKTvxoZ_oJtU30g",
    reviews: 6.8,
  },
  {
    id: 2,
    title: "Beige Linen Shirt",
    price: "₹2,800",
    save: "₹1,700.00",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUREhEWFhUVGRcXGBcYGBgXFhsYGhcYGBseFxUYHSggHRslHRkWITEiJSkrLi4uGCAzODMsNygtLisBCgoKDg0OGBAQGi0fHR0rLS8tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0rLS0tKy0tKy0rLS0tKy0tLS0tLS0tLf/AABEIAQEAxAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABKEAACAQIDBAYECwUGBAcAAAABAgMAEQQSIQUxQVETImFxgZEGMoKhBxQjQlJicpKiscEzU2NzgyRDk6Oz0bLC8PE0NcPE0tPh/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAIxEBAQACAQQCAwEBAAAAAAAAAAECEQMEEiExQVETMnEzIv/aAAwDAQACEQMRAD8A7aiiiu7mKKKKIFFFFAUUVQ21tiHCpnla30VHrMeSj9dwoLk0qopZmCqNSSbAeNc2/p7gQxXO9h84ISv+/urzb0i2/LinLOxCncgJyqBu04ntrDYkm16pcl+17TF6cYFmy9NbkWUhT48PG1bOA2jFMuaKRXH1SDbvHCvn7jVnCbSlgdZYXysOI18COI7DSZna+gqS1c16GelqY1MrWSdR1k4EfSS/DmOHvrpqvKrolqCKWigbai1OotQMNFOIpKBKSlooCkpaKBKKKWgfRRRRAopaKBKWiigp7Yx4w8EkxF8ik23XO4C/abV4ntzbcuJk6SVrncAPVUcgK9e9LtmviMM8aesRoN1yLEe8V4pLg5FcxlGD3tlIsb9xqmdXwiGR+e40xTXY7K9ApHAaZsg+iNT48K6KP0Mw6LYLc8ydaz5cuMaceHKvKivhSxGx3eNau19llJWXXQ+6ofiRte3jwq8u453Gy6VMPK8TrJGxV1N1Ybwa919F9sjF4ZJgLN6rjk43+B0I7DXh8kRHCvQ/gixd1xEJ3KUkHtBlb/hWumFc7HoVFLSV0UFFFFAUUUUBaktS0UDTSU8im2oEopbUUSfRSUtFRRRRQFFFFAVmbQhTpFYqL232F9/OtSs/auW6XNr3A9xrlz/pXfp7/wBwCW9RSVXxG0YoVJZgAN9zWFF6WdMSIMOzqNM5Nlv4A1gkt8vR7pLpaxuwkkJa2prEkwOQsjLXV4TGEi7gDnroPE1h+k6s3XAyodL7mb/Ye8/nMRXOx7O+MOY4UJA0LfMHZm534C9dB8H+yXw2JnSS1yilNfWAY5rcdOpfT5w51qRBFhiVQqiykXFluLGxI3E/9XrZ2bqxPMfr/vXThzvfI5c/FOy35aFFFFb3nEopaKBKKW1JQFFFFAUUUUBRRRQFLSUUQWiiigKWkpaArD9K8FDLF15MkiXaIhgGzEW3cQdx4eVblec+lPopjJMQ8qDpVc3XrgFRbcQxFgNwtSzcWxuqy5NoYQxNHjPlJY2dVt1rjgSy6WvceFUMF6QBbRRMY1vp1QT4G+/wrrT6NQDCJFiR11BuwBMikm9lsLkAWFtb2qnsr0MiWQOCXC63IIN+HVI0Irz94zfh6Mmd1ZfDe2WmZRm3CxAO89r3434ePcekzDordoNSY2RYUJGlq5bF7XV95rnjNr5XTY2JjFdI1dcxiYjuNtDbjoa6XY8ubpNLWI77W/715jsDH/2lVB0ckd+l/wA69D2PLaUqdMw943fma68U7eSOfLe7ium5RRRW95wooooCiiigKSlooEopaSgKKKKAoooogtFJRQLRRRQLRRRRMcT8J0cwSGSO+QFlcjhmtlLW4XuO8iuewGCx4Xqz210DN/3r07aeCWeKSFtzqVvxF9xHaDY+FeHvtGaCV1YkOLo44Zl6pPfcb64cuG7uNHFySeK3dtbUnWP4vif2gN1cG917SK5VsU3OmY3HM5uxJPMmn7IwvTSAE2Ub+Z7P/wBqmpjN1O7ndR03oVswu4xDbhfJ37r+FdRteASJJGdAykX5aaHw30/ZsAUAAWA0AG4VB6RuVglcb1U/7Vlyy3dtuHH246a3oBtw4rCrnN5YrI5vvsNG8R7wa6WvD9kYyTCMzwyFT0MTncR1miuCp0PrtXW4D4QZVkMM8AcgkZotC1txVWNjcajUXuLDWvUnp5Veh0VgbO9McHMBaYKTwfq+V99bscgYXUgjmDceYog6iiigKKKKAoNFFAlFLRQJeikpRUoFFFFQClpKWgWiqe0dpxQLmkcDiB849w79K4DbfpXNim6KF+gjLZBY3ldjoALbtSOKjm3Cp0mOk9KvTKHCXjS0k3FQdE7XI4/V3ns315F6QTyyYiR5WBc2YlQApBVStrAfNK1PiSjQZkBAWQAg6s2dGIdjz6jC24aW3klm1kv0Lj50KA+wWi/KMUuO0sorqAx0JGvIHS/cP0rt9g7NRlEbrZhpfjcGx1765XGMvQhT+0Vup2qwNwe5gCPtmumlxcUIh+Iu0ziPNOjhlIK6uEWwUEdYkC5GXiL1n5uG5TUd+DlmF8uqwaNEQhN1JsDXO+k+1c+ePdGDYsb2vfjYE8OAJrVg2quIWNo72JsQd6tyNcRihnile9/llDdgKylbdh6/kKzcHDcsr3fDZ1HL24zt+UEWL+UeFzuQxA7tUIcA+0mXxFPbM8fSC+aHKrEb8pNozfmp6vdk5Glx4s0OJAvmVG1/eREIw8Sqv/UFXMJAqYtoAbRTFowBuySg9CSOzPG3hXoyPMpmJmAcsR8niUV2trYk3YqPqTK9hyBHGptiTzQythw5R2NkKmwEu9LHiknq+2rcKpQKXjaM+tHmkQcbWHSr90Z+zo251JjetFBMDZgDExGhzRWKG/8ALaMD+WanSHT7K9PMSqdYCUpqwYWYpzVlGhXiCDprpY13+w9txYpM0ZsbAlDbMAdx04bxfmDyrxnaEtpDKB+1RnFuHSKyOO4P0g8K0thY+WFsNLFxQrY2AZumnARjwDBbDhfKeFToezUVBgMYk0ayoeq4uL7x2EcCDoR2VPVAUUUUBRRRQMoBooqUHUUlLQFc76Y7efDBEitnk0vYsV1sCFG8+t4geHRivL/TPHB8TK6toirGPtjpF0+/I1/qDnSTYwdpYxpFEuZjmd1JbVrqqG976XD2twy2uarbTkytFKh1MUTjh1ox0R/HExqxFCejmhO8LHOovyALDv6OQsR/D7Kp4kM0Cckkdb8syq1vMMfE1fQmnCn42qkZQwkFt1hOFFvCSmSLmwyN+7kdD9l1V196zedXHAbF9WwXFxsQOGeRT1fCdbeyKrbNs8c8emqCVftRG5t/TaakSrbQwS5InG50YHsdXYG3s9Gfap+0nMeI6WO658kyHkXUOezR86+zU8XWwzrxidZBzyOBG/4hB503Frnw8T8Y2eI9xPSp72mHs00Rq7NBV/jMUZ+LsA0oUXELA9YNyUG5F/mMORrPgwhWTEYY36yvlHNo7yoe8qrL/UqfCYpkCxq5SLGQCOTgoZS0NyOWZMx+rI3OqWBxrCeF5bh4XjWS+/5NwDftygA9xqnbrLc+XS5bx19I4Bmw8i6XjZZRzyvaKT8XxfyoxjXjhkB1ymMkaHNERlP3GiHs1ZwWHKTywfUxEZHasbkfiRT4VXiF4JFv6jJIO43jfzLQ+VXc1nE4gR4pZ7dVykxHNJVDyL3dZ08KbFhCkk2EbUdcA8niDsjDvsVPZIeyosSM2HhfihkhPdcSp/qSD2KsYjEhZYJzcho48/M5c2HfxIjJ9qgqMc2G13xyAA/VkR2I7gY797nnVtMCXhhvcHoXyci6ySSlT2mMkjmbdtV54ykcsJteGTMe0fsj5HJbsY0pmIxAUsQivCLi9vk1VAe0hSfvHnTY7T4O/SBmkaGQ/tOsp+vazH2iCT9Zu2vQ68PwAdegCWEimSNddOkRxKg8XZR417Zh5g6K43OoYdxF6rRJRRRVQUUUUEd6KZmpwNEFpaSlqRBtDGLDGzsbW0Hax0A868bZhJ0ee4E0xzHjlGRR5ZpK7D4Rsac8cd+qiSORzZldF8rN51xsYDyYWMcQg7y8zE+85fZq2IjgxTGZ8Tl0V87r9V3ylPEErblennDBfjGHzXsFliP01RS4I74ZGf2bVVd2fpglgpLTNwJCByNe5205nupfjgDQFz14bBhxaFxnXX6QV3UjkU5Gp2GOzKMPKu8KWU8mWeS35A+NaEjpBjM/91nD2H7mUZrW/lvaoXw/yLxE3bDSE9hjkIUkdgdUP9WjHdeGGTkGhbvQ5lP3JFX+maJS7Nw5TENhnIu/SYcnhmN1U93SCNvCodm9ZJoT85OkUcc8V3/0+mHjTtrEkxTgkGRFN+PSR/Jse8lFf26lx2I6LFLiFXRimIC8CHszr3ZukTwNSKajPh2HGJ1YfYk6j+GcQ/ePOk2iM4WbjIuV/wCYgyk+0vRt3lqu4fCiPFPhgerJmhU77rIt4WPiYWqlsjD9LMkBkEayOoLN6qndc91zy8Kgacr22ircGlic90mRm8w586p7LiIeSI7zFOh71jZx+JFq16XYT4viSiyCTIkIEi+q2SNUuLE/OQ8TYipLhNo3+a2Iv7Ej3/4HoM7BAGDEKeHRSjvV+i/Kb3U3EgnDRn6Ekq+DLGwHnnPjUuylIeSM7zFOp70jZx+KNaiS5gkH0XjfwIkQ+8x0Em0+s05YkDpBu+cSGCAnlx89N1U8ZEVWKM3uGmZh9bpTGbeESjwqTbUhKMeZw7HxhvfzI86iTGMI4HW2eJ5LE6g2aOVb8+s7+dVvtKziG6WKSTiJmdudphv7syAX5sOdeseg2LeXCh3YNcm1jcjdmzcjnzEDkRXluVExLRqbRTDKL7hHMgeO/wBktGb80rrfgvxjI7Ydt0iGROQZHKuL8T1ge4CpqHot6Q0GkqNAooooIstOFJeioQW9LSCqu1cWYoJZQLlEdgO0KSKgcj8I2HUvE5dQoBMi3Gcqp6tl3m5dl72rh5WscOY9HREyn6/SO/8AxsR4VJizLI4WR80hVnkJuSpXO3WI42AuOGg0Ogds+XNiMO2QqilLcb9FZ5Lc7nMfatwrpPAqFAhxaKdEVlB5qMTCt/EfnVBIFGR3P7XMBra1ioDk8s2caj5jeFrB9ZJ2/g69pM0IF/aIPhWbtLFFmuvqoFVQeCroL9p1J7SarlUxrwPk69mKgCKZPnBbBdPq6KVO4MoH0b2sLGcs2HJBNhMjDc3RgtdexomkbwFZsPAgEWzAA69XLmaNjxGUkq3EacrXY3OHeKQEsqMwtxIVszKe9XH3jU41KSIZ8M68YnEg+xIBG/4hB5mmz9fDI3GJ2jP2XvIn4hP5ipsFCI8SYC10kvFm5pKPk37tY5PCotlgnpoGBBdGsvHpIvlB42V09urINxzExwTA2YAxk8miIyeUbRD2aZt0ATuy+q9pV7pVElvDNbwqTC9eCaPXq5Jl9k5H81kDf06Zi+vBC+t0zwt4N0ieYkYD+WeVAYzrYeBuKmWI9ysso/1m8qbtaYq0cnOGBh3pGqH8UZpcGc8MsfFcsy+zdHH3XDf06bjkzQQuPmZ4W7Os0qX7xI4H8s8qgaSWG0WX6U8ieEjMg9ziszBklJVHGO9vsMkh8lVqnxExXExSnlhZD39HEW/EDU0ENsVLGNw+Np/lTKP0oIcbDo8YBY5QptvusYjA81c+K1n4NQ+FNiM0UjSEccjiFCQOPWCedW4iWUnW5OpG/NcsCO0k37SluNVdnJlneIW+VjkUciWjLpb2wlVvtaLazkwwyHrGGVlseK5Y2Rb8rrIPGtj0bxvxXElVN0Vgwvb9mxVW7iY2VjbjEKwMEbwTDkYX7rF0v3fKW8qtlVcRMTlMkZiJN8odLIrE8svR35XJ5VKK9xNFZvo/tJJ4VKuGZAqyC4LK4FiGA3G960TUILRSXooIb0oNJShaB1RYqYIjO3qqpY35AXNSiuA9PNtuXfDIxWNEPS6almC5ADyuy3G4gmokHI4uYBMkdyXYs5AIBIJCqo3kC7Hmcy7rVLiYS+KjhRipjMcSsPmlLZ2uOT9I57zSQO6zRW1cRDIFHqymNjFbtzGNiT84tyqhg5ikcko3kdEntqc58EuvfIOVXQaxGWdYxlQkOOeRXsq39tfuiqmNwzMoCKWEUaPIQNAZDmBPd0iJ3g1NMHVQml5FDHkF6rrc+GY+z3V6X8HmwozhHllBY4pcjAjLaNLxqAO65v3cqpl5THneDGgtxWO3f0MqfmvuqdzmLLwkQTL2Mqkt7hKvbYchU20dnNh5Oh+ehkRTzyETRt3nPbuNQdLkCugB6N8yg7skgDKp7Oq4P2jU4pLiGzwxv86M9E3PLq8Z7/2i9yLVnaOIKzpilAu+TEAcM9+uP8VZB3VCIArSxKSUaPOl9+UBZ0v9bICO8mlJz4UHjDIV9iUZh4Bo5P8AEq6FiJUhxeW/yRbL/QmW1+/o5Ae+q0MJXp8O/rWJ7pIcxP4OmHeRRjhmhhk4gNC3fGQy/wCXIij7HZU208QRMmIW13WObvcdV798iSUE3oemEzynFzNGAhCBRcPnVkYN1TawbTdzvpVXCwMGmwres90t/GiYlLd5DR90hqrtPDiOZ0X1N6fy3AdPwMtW9psT0WJU2Z1sx49NFZWPeR0b97moFfazBlhYcYE/CXT/AJa0hptLsbEW8JHsfc1UvSJReJ19V0JA5ZpHkK9ymTJ7BqzJJfGwtzbCP5pC361IpbN9SS4vlVXt3OqEfdd6p4tjHiVktm1VuVyDrrwNwT41o4AWkmU/usQPuozfmorL2tKCI7b7Nfvvp+tUyWh2Cky9LGNc6mMEi17OrA2v1TdF52vTojmQJ9DM47yFze5R92qLOd+4/rzqaInOGvxB058ffekotCV1tJGzK6sCWBIPEg3HHf7q9o9F8ZNNho5JgM5G8C1xuuRwO+vGMBFmkVWJALoCPqlgDoeIvx7a95iiCKEUWCgADsGlKg+iiioEQpxpq06iHLfCHtQw4YKr5WlbKQPWKWJbLoeOUHsPbXna4tmCCY3UByRcgOyq2QMRrrZIxyAsK6b4UgBNAdTdGBHIZtCBz1PkK5IMJCTbqqNRuso0C+Ogv23q0E0GJfJPiOrmssa20AMtwcoH8JJV7L1VF+gFzkEstibXGWNRr5yn7nfTA11cHRSVYgD5wzBbcB6zeAPiyV7ogNjkzBTlFzmsbE8lJJH26UX8DhjiMRBESY1Y9AWtdlAHE7s5BIHAXFtBXteEgWJFjX1VAUcTYczxNeG7H2oMLI0gTpJAeoWZsoYZgGKaljZjpcAduleueic+JfDh8ULOxJFwFbIQLZlAFje+nK1USwvhMw4VYcSBqsihu0AMR+VvKuG6MLeNjuLxZjoLevGT2ZgxJ5GvTfT/AA+fAy23pkfycX9xNeXlc9l4yRpl+3HdLeIVh3utXgfFiipilYG8LCOReNgSR5rmTsyDnVjZ0NpJsNv6RHReRZbSxkfaKKB9uq8VnKH98phbj8ouUA+Zhc9t6bHiGQQTL66Gw74irLfwZR3KKlCbA9eGaPkFmX2CVb8EjN7FBOfDKeMMhX2ZRmXyZJfvirChIcZbToS1v6Ey/wD1SVDs+Blklwzes4eK17fKocyeJdAvtmgZtLrxQScQrRN3xsGX8EkY9inYQ54Jo9bpkmXwPRv5h0Y9kdGBOeCaPeVCTr7BKP8Agkzf061fQ18AOm+Nu4dl6OLKDk+UVkfNbkGG/TQ21oMaVc+Gvxhksf5coJHgHVvGUUmLcrJC/KLDH7sUY/NasbNgYSvhXADSB4CP4oN0/wA1EHcTWfjJM8aHiqlD3XZlPkxHsVI0xH/bJk7cYvnHMB+lZrwZ8O9gMyyR5T9pJSRfkejHjatZf/MH7ZJT4Mrked/fWfgjeCccuicd4fJ+UhqKlhwXcgAEk20rtNi+hTSAGSUIOIUZjz3mwHHnVfaU6yYkTAAdIsTHv6JFb3qa7vYZ6orBy82WN1Gzh4ccpusmf0KiugjmdJCw+UNm3a+qABc28+dd8axtoDcw+aQfI3rYvfWr9PncpdqdRhMbNCiiitLMYtOpooZrAk8NaVDlPSz0eOLfPG9nRcgBvlOpOn0Trv1rznauzpsP1JFK3NzpobXAs247yfGvZsDuvz1pZoY5cyuoYDQ3F9ax49RlttvT46n28LkDaID2n7RGt+7d50mHieR1jRSzE2VRvJ/68vCvUtqeh2EILANGddVOmvYbioPRT0OEEq4rpS1s2VcoGhBUEm/InhyrRhyzNn5OK4J/RD0MTDDpZgrznUaZlj7Fv8763l29bekvRXRyVdq4XpYJYvpo6jvKkD3149s0j+zH+O3/ALf/AHr21a8TxwMbyooscPM7qOwuqe4rH941MEAuMOCNGSUnuLIv6x1Yxii86i1lkEq9iPcafeipkoHy6ruuky/Y1A/DKD7JqWJc8qKD+2hVBfiwjEaj/FjFWDceM8MEm/qtC3fGQVv/AE5I19jsqTacrdJHiFOsiJJe394hyOe/pIy3tCo8B14Jo/ohJ19g5G/DIW/p0q9fDHnDJf2JVsfJox/iUFjqR40X0hlPcBDiE1+6khHetZU0JR2jb1lLK3epsffereNGeCF/oZ4W8D0ieYkYD+X2UbXOYpN+9QMT9dbxyeJZS3tipEu1nYtFiFJzSIj5v4qHI57y6Z/bFJtSNenY7o5gJB9VZQH/AAsbeyaI+vhnXjC4cfYksj/iWH7xpJxnw8bcYmaI88r3lj/F0/kKAaTo5YJmFspRZBvIaFhG478gQ+1TMNhynxmE+sqEd5jmjLW9lWPhUuO+UijI3tfvMqBUcd7IIG7Se2mSOTM7/wAC57c+GEZ/E5v3Gggkaywt2MPKRj/zV6N6NSXQV52qZugjbdkdj2XaQk+CqD4V13oJi7rlPKvO6vHV23dLl407HFaqauYVrop+qv5Vn4prKau4L9mn2V/KnSe6dX6ie9FFFbmIlqq7SkslvpG3hvq1es3GnNJbgo951/K1cefLWFdODHuzhkmOEdlALMRuFvDefdWfh8W/yjhiAoLWtoTq1jceG+k2mjK99crWOZRqNApW99Ba58aq4d0Z2bJYKBZTwOq2tuNst+8k1kmpi1ZW3JrTEyuI+G9u7j/tWwNNBVTZ2GyLc+s2p/QVarXw4dsZubk7sv4W9ANFJXVwPBryz0rwQj2iR82exPdLeNvI3PgK9SFcl8IGAuIMSBrFIqt9lmBHkwA9qpiXnETkKGYXMPVccTE5II15MzLf+IvKnOWVQA3Wga6tzRyGRh2BrH+oKuLGOkxYO4JL/rJb8WWqi6Rxu3q5pIX55LIw05gsxHcKsL6OiYu50ikOvC0WITXySQ+IpmzIiJnwz+tIHgPLpAbp/mpGKpzg5FDetHeJuOl2dD2ggsB2KKs7VmbpI8Qp1kVJQf4i9R/HpI2PiKBuzuvHNHzQSr9qK5P+U03kKROvhnHGGQOPsSgI/kyw/eNWZJ1hxnSW+TLLJa391KA5X7jlaZgsNkxD4Zj65kw5J+kTlQ9wkEbeFBqejOMwZw8mGkhY4nEN0aS3GRQ2UKG62lnAO48DcWrJ2VdumgIN5EJAtqJIvlB4lVkT26yoWIJ3g7+0GtnaOIMeJXEoPXyYgDhmJzOvcJBIvcKCDD3eGRBvQiYc7DqPbtsyN3RmpZZNXcAeqsq8utlWVbciXe/aum+noscGMy3+RzFb33wSra5P8p71WctEkiNbPHKqkezKkmnFSRGD4VIldALgHROqCdSIplaxPO2ex+0Lcq1PQuSzkA6A+6s6OIM4T97CoF/sq6AnmrKo7VXnvf6KXWZQdA+qngeGh7Ky9VjvBp6a6zej41vkzWrhRaNByVfyFY+1BZB2CtxFsAOQFcOknt16u+JBRRRW1hI7gAk7gL1nYYXux3k3PjU21JOqF4sfcNT+nnRawrD1WXmYt3S4eLkhxjgI191j+VZewMGWOdt18x7TwH6+NWJ7yuI18TwA7a2YIQihV3D/AKuacHHcru+jqeTXie0hpKL0l63MJaKKKJKKh2jhFmieFt0ile640I7QbHwqUU6irxezD4xnFnZSrDk64iEuPdfuPZUM2mHjH0pZm8AkKj3563fS7D9FipQfVa0nssCj27dVPhWJjP2MS8UMyHvDK3/OKvKkuKWzNHb+4gY/aWGNr+ClhQXz4bjeGT8Ey/o0X+ZVrEsPjoDGyP0aE8o5YVQnwR7+FVdkwtnkw7DrOkkdv4ifKKO/PGF9qgbi+tDDJrdc8LeyekT8MhA/l9lO2pIT0UwJBeNDf68fyRPfeMN7QpNnDPFPHa5yrMvfESD/AJckh9mliTPhnHGGRXH2ZRkfwzJD940EO3gBiDIo6swEo7pQHt7LEr7NTTMGwqEnWKQx+xIDIn4ln+9Rikz4aJjvjZ4T9k/Kp72m8hWjs7E4dcH8WlitLOSwnvooRmVQw4gEC9vmytxGoZW0Zc0cD2+YYm0+dE1hf+m8I8KNp40rMJ8oOdY5Sp3MWjUuD2F84qbCQsyPhzcMcs0S/SYAqwU8cym4IOpiUa6U1YhNEB/eQq2n0orlj7SFmPapP0NQlRl+PogOUJKkab9VjYLGCeZVV15modiY7oV6RgbLJDe3EEPm9yjXnbmafKOkAxCftYshcdi5VWUdlwoYcCQdzdV2SNXE4W8EjFZI95QNqydthdkPHKOKkCtm5paV7s2wcPNHo53XurA/pWLszHiZWI0KO6EfZYgHxAB8aycNjjkjmjIDqAykai9uF9SpHA8DVv0dwLxCXP8APkLrzswBsRwIYsvhWXgstupp258bNbu9taiiitLgzCeklJ4DQUmPmsMo1J0A7adghYHzpNnpnYynuX9T+nnXl4y8uf8AXp5WcWH8WNnYTo111ZtWP6DsFWDS0016eOMk1HmW3K7opaKKkLRSUtAtLTRThRVw3wkYbWKQD1leM95AK+8AeNcfiSCstuDJKPsuLN72ir0j05ivBG30Joj4E5fzIrzbDJcW+lh3J7ckhf3CMeVWiSbQGZIZPpR5T3xs0Y/AI6s4/EZMWMQBoWixA7c2WU/iLDwqsBmwx5xyi3dKhv74V8zTsWLwwNxAljPsvnHumHuqws4PDrHjehPqmR4PZkzQg91nBqvshb9LGd7wyC31owJh74reNP2s5Ekcg3mKBx3rGqn8SNVm4TaPDKZ/Do5W/wDg9QKWFAME68uhkHss0f8A61NnwzSYRXH9zLJfsWRYst+wsrjxqTZURzyQkavHKhH1kXpR+OJRTMGA0M68uilHsOYz7pj5UEmEjLj4sw6x68XY5GbKD9Fxw+llPE3I3Lp0qsRPCQxcHrNGSFDHmysVF95Di98tbG1Nl3wWHxsZIIVUYgm4KEpcHmGAPtdlZk2IVZUxOW6ShukQczdJkHK4OYcg68qiXabERfKExMQAJLJIlvk81tRl/dyIT1exwLC1pVhHSPCl8k6AxXPEkPGCeJzBor8yaIMPkkkwrsLP1VY6LnBvE9zuDAkX4CUmtX0d9GpsYoTK0YiY2lYEADN10A3lg3WHIlwSLiluiL/oLOZFSM6hH/DbOL+Nx3Cu+NSLs+OCIJGoHWLE8WZrlmPaT+g3AVFXLCTzZ8r55WyS/AoopKuoyca5WNiBqa0IcqhUHLQcTYXJt7zWblSSTo2A6ykZvWdRZ/UVkZRclbm6k2GuljqwRhWDZm3MDci+Xo3UDRbWLNc6DcpPqAHH02Optr6rPdmP0YZltmzDLprwN7AWPG5IA53FL0gvl42uRY6C19eWlJFFuLWuHZwA8ratC8d2drFdWFggsMt+OjlLAgdS1rt1pLl+iy9UEernsbsdwOlzatW79MhpmUAEsLMbDtO+y89LnSl6Vblbi6+sOX2uXjSRxG2pAN5DZXkObNEEAaVhnTUfM3BRbeRUsa2IN1PrXtmUD+zxwgRqNG6ynWQkhbAXNRu/QZ0osDfQ6iwJuOYtwp9qieEsiI7DUkyWLG6tM8rLcqL3Vsl+0nhVh3LEsdSSSe861aUpLUCiipVUdvQF8PIoFzbMB2qQwt26V5LhhZ4b7szwtyylrN5rKa9qtXJ7S+DhZVPQTZMxDZXGZQQpUhSNQDpvB3U3pMcBgFOTERnf0Yb2kljv+EvThY4Y845h5Sx2/OEedd3H8G+J6aSTporSCYEde46RWH0eBYHwpcL8F+JCyI2IitIoFwHNmV1YG1tdAw9qn5MftPa4HG6wwNy6WI+y/Sj3Te6l2rr0UgJ68Mev1owYT74r+Nd63wZyiJovjAbrq4PR5QCFZTvY3uCv3BVSb0Bm6NI2e+RnIIFtHy6W5XUn2jUflxT21y+LnEeME49UumIt9WTLKR5MV8DTcJhOjxTYck2JlgvzzBo1PmUaulm9Dy3RrIzXjUqLW66hmbTTeMxFuQG+tE+i2GLhpC7OAgFmNzkVVBOXj1RrzqLzYp/HVL0MkE2zZ4G3rJoOIWRAN3eHrB2VsGecSYYRHMjZlYghQ2iOpYjcy5T/AExzr1PZGyIo8zrCiFySSL5jqTqT2k6VqopB6qeJ0rn+XVulu1yWxvQCO0b4u0jogTKL9GcpOXMN7ELlXXSyjSu1EYAsKI83GpHqlyt9mtMnHN1rcqrU+drsT20ytOPiOdFJS0VKGTsf15PZ/M1ptRRXDp/0jt1H+lApKKK6uJaUUtFAlKKKKFOWg0lFSg4Vo4DdRRVOX0tj7aEdTUUVldDarz7jRRRaOb9Jv/Dydx/I1R2J6w7qWioq89Ogi3rWgKWirKikeloqYrWA+895pKKK1xyFFFFSP//Z",
    reviews: 1.8,
  },
  {
    id: 3,
    title: "Tan Leather Loafers",
    price: "₹7,200",
    save: "₹5,600.00",
    image: "https://tse4.mm.bing.net/th/id/OIP.8dK72aijy7jgXlFxtBhoDAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    reviews: 3.9,
  },
  {
    id: 4,
    title: "Beige Cordroy Pant",
    price: "₹3,200",
    save: "₹2,100.00",
    image: "https://tse1.mm.bing.net/th/id/OIP.KR1ktjEpcNjKd2Yo6G_9iQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    reviews: 4.5,
  },
  {
  id: 5,
    title: "Verbier Half Zip Sweater",
    price: "₹4,400.00",
    save: "₹1700.00",
    image: "https://old-money.com/cdn/shop/files/1_2ec4740c-ce11-4215-8565-9042444dddca.jpg?v=1732766191&width=800",
    reviews: 4.1,
   },
    {
  id: 6,
    title: "Old Money Linen Combo (Longsleeve)",
    price: "₹7600.00",
    save: "₹5,800.00",
    image: "https://old-money.com/cdn/shop/files/1_38035054-c7ed-4f89-a612-2a4371e1e034.jpg?v=1732757990&width=800",
    reviews: 4.9,
   },
    {
  id: 7,
    title: "Suede Driver Loafers",
    price: "₹5,300",
    save: "₹1,000.00",
    image: "https://old-money.com/cdn/shop/files/1_e37c7788-8537-49b1-867a-308d73519bff.png?v=1742214496&width=800",
    reviews: 3.8,
   },
    {
  id: 8,
    title: "The Mandarin Mark",
    price: "₹3,800",
    save: "₹2,100.00",
    image: "https://old-money.com/cdn/shop/files/ImageEdit-OldMoney_9_b6730487-01d1-4d36-ba59-98a40e844c62.jpg?v=1740582356&width=800",
    reviews: 4.9,
   },
    {
  id: 9,
    title: "Gentlemen's Striped Shirt",
    price: "₹4,800",
    save: "₹3,300.00",
    image: "https://old-money.com/cdn/shop/files/7V3A6441.png?v=1754928594&width=800",
    reviews: 68,
   },
    {
  id: 10,
    title: "Refined Solid T-Shirt",
    price: "₹2,600",
    save: "₹600.00",
    image: "https://old-money.com/cdn/shop/files/SOLIDTEE1_02c46197-61ae-4516-b081-ed5c78137f30.jpg?v=1741979814&width=800",
    reviews: 4.9,
   },
    {
  id: 11,
    title: "Old Money Linen Combo (Shorts)",
    price: "₹6,700",
    save: "₹6,700.00",
    image: "https://old-money.com/cdn/shop/files/1_cb3970db-7cbe-454e-9d0e-ac385c833540.jpg?v=1732941628&width=800",
    reviews: 4.9,
   },
   {
  id: 12,
    title: "Casablanca - Premium Linen Shorts",
    price: "₹4,300",
    save: "₹700.00",
    image: "https://old-money.com/cdn/shop/files/1_d8ff316a-5869-4873-b37b-03c47ae33276.jpg?v=1732799403&width=800",
    reviews: 4.5,
   },
];

  return (<>
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="https://old-money.com/cdn/shop/files/Untitled_3000_x_2000_px_3000_x_1700_px_6.png?v=1757410800&width=2000"
        alt="Hero Background"
        className="absolute inset-0 w-auto mt-5 h-auto
        "
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/20 w-auto h-auto"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-beige-100 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">DRESS WITH CLASS</h2>
        <p className="mb-4">AUTUMN TRIP GIVEAWAY (50% OFF)</p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link to="/mens">
          <button className="px-6 py-2 text-white border border-black rounded hover:bg-beige-400 hover:text-beige-900 transition">
            SHOP NOW
          </button>
          </Link>
        </div>
      </div>
    </section>
    <section className="py-12 px-6 bg-white">
      {/* Mission */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-beige-900">
          OLD MONEY&apos;S <span className="text-brand">MISSION</span>
        </h2>
        <p className="text-beige-700 mt-4">
          Everyone deserves to dress classy. We elevate your style with Old Money fashion, 
          without overpaying.
        </p>
      </div>

      {/* Bestsellers Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-beige-900">
          SHOP <span className="text-brand">BESTSELLERS</span>
        </h3>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white shadow-sm rounded-lg overflow-hidden">
            {/* Save Badge */}
            <div className="absolute top-2 left-2 bg-brand text-white text-xs font-semibold px-2 py-1 rounded">
              SAVE RS. {product.save}
            </div>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain bg-beige-50"
            />

            {/* Product Info */}
            <div className="p-4 text-center">
              <h4 className="text-beige-900 font-semibold">{product.title}</h4>
              <p className="text-sm text-beige-700 mt-1">{product.price}</p>
              {/* Ratings */}
              <div className="flex items-center justify-center space-x-1 mt-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} fill="#d8bfa0" stroke="#d8bfa0" />
                  ))}

                  
                <span className="text-sm text-beige-700">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
