// 自動生成されたコードです。変更しないでください。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "レベル1":
            case "レベル1":return tiles.createTilemap(hex`10001000050606050502050505050205050202060709020b020b080808080808080808070508020802020202080202020202080205080208080802080802080808020806060802080508020802020802080208050608080802080808020808020802080506020202020802080808020808020806050808080808020202020b080202080705080202020202080808080808020802020802080808080305050502080202050708020805050505010a0105080808020208020808050a010a010a050b0208070508020208050505050505050502020605080b020808080808080808080804050207050505050507020202070605050700000000000000000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . 2 . . . . . . . . . . 2 
2 . 2 . 2 2 2 2 . 2 2 2 2 2 . 2 
2 . 2 . . . 2 . . 2 . . . 2 . 2 
2 . 2 . 2 . 2 . 2 2 . 2 . 2 . 2 
2 . . . 2 . . . 2 . . 2 . 2 . 2 
2 2 2 2 2 . 2 . . . 2 . . 2 . 2 
2 . . . . . 2 2 2 2 . . 2 2 . 2 
2 . 2 2 2 2 2 . . . . . . 2 . 2 
2 . 2 . . . . . 2 2 2 2 . 2 2 2 
2 . 2 . 2 2 2 2 2 2 2 2 . . . 2 
2 . 2 . . 2 2 2 2 2 2 2 . 2 . 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.swamp.swampTile9,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.chestClosed,sprites.dungeon.floorLight1,sprites.dungeon.floorLight5,sprites.dungeon.floorLight3,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.stairNorth,sprites.swamp.swampTile13,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自動生成されたコードです。変更しないでください。
