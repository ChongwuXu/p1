class WSTest {
    constructor() {
        core.EventCenter.getInstance().addEventListener(core.EventID.SOCKET_CONNECT, this.onSocketConnect, this);
        core.EventCenter.getInstance().addEventListener(core.EventID.SOCKET_CLOSE, this.onSocketClose, this);
        core.EventCenter.getInstance().addEventListener(core.EventID.SOCKET_DATA, this.onSocketData, this);
        core.EventCenter.getInstance().addEventListener(core.EventID.SOCKET_IOERROR, this.onSocketIOError, this);
        core.SocketAPI.instance.setType(core.WebSocketTypeEnum.TYPE_BINARY);

        egret.setInterval(function (): void {
            // core.SocketAPI.instance.setAddressURL('ws://192.168.17.246:8080');
            core.SocketAPI.instance.setAddressURL('ws://echo.websocket.org:80');
            core.SocketAPI.instance.connect();
            //    core.SocketAPI.instance.close();
        }, this, 5000);

    }

    private onSocketConnect(data: core.SocketEventData): void {
        egret.log(data);
        // core.SocketAPI.instance.close();
    }

    private onSocketClose(data: core.SocketEventData): void {
        egret.log(data);
    }

    private onSocketData(data: core.SocketEventData): void {
        egret.log(data);
    }

    private onSocketIOError(data: core.SocketEventData): void {
        egret.log(data);
    }
}