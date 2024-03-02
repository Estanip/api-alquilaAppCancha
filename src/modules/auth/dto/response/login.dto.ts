import { UserSchema } from 'src/modules/users/schemas/UserSchema';

export class LoginResponseDto {
    readonly _id: string;
    readonly email: string;
    readonly name: string;
    readonly identification_number: string;
    readonly token: string;

    static toResponse(data: UserSchema, token: string): LoginResponseDto | null {
        let user: LoginResponseDto = null;
        if (data)
            user = {
                _id: data?._id.toString(),
                email: data?.email,
                name: `${data?.first_name} ${data?.last_name}`,
                identification_number: data?.identification_number,
                token,
            };
        return user;
    }
}