"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    static map(data) {
        return {
            id: data.getId(),
            email: data.getEmail(),
            firebaseUid: data.getFirebaseUid(),
            foto_perfil: data.getFotoPerfil(),
            rol: data.getRole(),
            username: data.getUsername(),
        };
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user_mapper.js.map