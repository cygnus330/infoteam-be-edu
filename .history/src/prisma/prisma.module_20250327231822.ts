import { PrismaService } from "./prisma.service";


@Module({
  providers: [PrismaService]
})
export class BoardModule {}