Package.describe({
  "name": "chetanbnaik:mediasoup-client-meteor",
  "version": "2.0.4",
  "summary": "mediasoup client side JavaScript SDK",
  "git": "https://github.com/chetanbnaik/mediasoup-client-meteor",
  "documentation": "README.MD"
});

Package.registerBuildPlugin({
  "name": "mediasoup-client-meteor",
  "use": [
    'ecmascript@0.6.1',
    'babel-compiler@6.13.0'
  ],
  "sources": [
    'src/CommandQueue.js',
    'src/Consumer.js',
    'src/Device.js',
    'src/EnhancedEventEmitter.js',
    'src/errors.js',
    'src/index.js',
    'src/Logger.js',
    'src/ortc.js',
    'src/Peer.js',
    'src/Producer.js',
    'src/Room.js',
    'src/Transport.js',
    'src/utils.js',
    'src/handlers/Chrome55.js',
    'src/handlers/Edge11.js',
    'src/handlers/Firefox50.js',
    'src/handlers/Safari11.js',
    'src/handlers/ortc/edgeUtils.js',
    'src/handlers/sdp/commonUtils.js',
    'src/handlers/sdp/planBUtils.js',
    'src/handlers/sdp/RemotePlanBSdp.js',
    'src/handlers/sdp/RemoteUnifiedPlanSdp.js',
    'src/handlers/sdp/unifiedPlanUtils.js'
  ],
  "npmDependencies": {
    "bowser": "1.8.1",
    "debug": "3.1.0",
    "random-number": "0.0.9",
    "sdp-transform": "2.3.0"
  }
});
