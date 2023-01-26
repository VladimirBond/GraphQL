const {PrismaClient} = require('@prisma/client')
const prisma=new PrismaClient()

async function main() {
	const newLink = await prisma.link.create({
    data: {
      description: 'Fullstack test for GraphQL',
      url: 'www.howtographql.com',
    },
  })
    const newLink1 = await prisma.link.create({
    data: {
      description: 'News Ukrainian about War with russish',
      url: 'www.pravda.com.ua',
    },
  })
	const newLink2 = await prisma.link.create({
    data: {
      description: 'News and charts on Americans fondmarkets: Nasdaq, S&P500, Djia',
      url: 'www.finviz.com',
    },
  })
	
	const allLinks= await prisma.link.findMany()
	console.log(allLinks)
}

main().catch(e => {throw e}).finally(async ()=>{
	                                      await prisma.$disconnect()
                                          })
