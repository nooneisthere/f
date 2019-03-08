/*
https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file
http://findproxyforurl.com/pac-functions/

此规则成功匹配后，即使baidu也会显示The proxy server is refusing connections
##file:///e:/bake/proxy.pac 这个地址需要可以直接在浏览器打开



    //shExpMatch need match the whole url, need add * after it

    dnsDomainIs seems match the end of the host string
    dnsDomainIs("www.google.com", "oogle.com") true
usually only need match host, unless it is not a domain is banned, then need url

所有的https协议，代理的时候不仅需要http，还需要SSL协议代理
var proxy_yes = 'SOCKS5 127.0.0.1:7070';
'PROXY' for HTTP server  'SOCKS5'
Netscape, use: file:///c|/windows/proxy.pac
file:///mnt/hgfs/share/proxy.pac
Internet Explorer, use: file://c:/windows/proxy.pac

    if (isInNet(myIpAddress(), "192.168.172.0", "255.255.0.0")){
	    var proxy_yes = 'PROXY 192.168.0.xxx:9666';
	}
*/


function FindProxyForURL(url, host) {
    var proxy_yes = 'PROXY 192.168.200.1:9666';
	var proxy_no = 'DIRECT';
	url = url.toLowerCase ();
    host = host.toLowerCase();


	if (
        dnsDomainIs(host, ".githubassets.com")||
    	dnsDomainIs(host, ".blogspot.com") ||
    	dnsDomainIs(host, ".vox.com") ||
    	dnsDomainIs(host, ".imdb.com") ||
    	dnsDomainIs(host, ".wikipedia.org") ||
        dnsDomainIs(host, "hubstaff.com") ||
    	dnsDomainIs(host, ".klogs.org") ||
    	dnsDomainIs(host, "twitter.com") ||
    	dnsDomainIs(host, "reddit.com") ||
        dnsDomainIs(host, "cloudfront.net") ||

//dnsDomainIs(host, "lastpass.com") ||
        shExpMatch(host, "*google*") ||
    	shExpMatch(host, "*.fbcdn.*") ||
    	shExpMatch(host, "*.youtube.*") ||
    	shExpMatch(host, "*.facebook.*") ||
    	shExpMatch(url, "*64.233.179.104*") ||
        shExpMatch(url, "*wujieliulan*")


	){
	    return proxy_yes;
	}else{
	    return proxy_no;
	}

}