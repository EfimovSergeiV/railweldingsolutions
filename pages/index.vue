<template>
  <div class="">

    <div class=" bg-sky-950">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">

        <div class="flex items-center h-20 justify-between">

          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+150</span><p class="text-gray-100 text-base font-semibold">Сотрудников</p></div>
          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+3500</span><p class="text-gray-100 text-base font-semibold">Реализованных проектов</p></div>
          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+560 Га</span><p class="text-gray-100 text-base font-semibold">Площадь производства</p></div>
          <div class="flex items-center gap-2"><span class="font-bold text-gray-100 text-[36px]">+200</span><p class="text-gray-100 text-base font-semibold">Волнистых попугаев</p></div>

        </div>

      </div>
    </div>


    <div class="bg-white py-1 min-h-screen grid grid-cols-1 content-center">
      <div class="container mx-auto  lg:max-w-7xl lg:px-8">
        <p class="my-4 text-2xl">Продукция</p>
        <p v-for="i in 15" :key="i" class="my-2">hallo welt</p>
      </div>      
    </div>


    <div class="">
      <div class="bg-white">

        <div class="bg-[url('images/rails-bg.jpg')] h-[380px] bg-no-repeat bg-left-bottom bg-cover">
          <div class="bg-main-primary/70 hover:bg-main-primary/80 backdrop-blur-sm transition-all duration-1000 h-full relative">
            <div class="absolute w-full h-full">

              <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8 h-full">
                <div class="flex items-center justify-center h-full">
                  <div class="grid grid-cols-1 gap-2">
                    <p class="text-slate-200 font-black text-[36px] uppercase">Ищете надежное и эффективное решение для сварки рельсов?</p>
                    <p class="text-3xl text-white uppercase">У нас есть идеальное предложение для вас!</p>                
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="bg-white/80 py-4 min-h-screen grid grid-cols-1 content-center">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">

        <div class="my-4">
          <p class="font-opensans font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-800 to-blue-900 text-[20px] md:text-[40px] uppercase se lect-none">Обучение и техническая поддержка</p>
        </div>
        
        <p class="text-2xl md:text-lg text-main-primary se lect-none font-opensans font-semibold">
          Мы предлагаем специализированное техническое обучение и консультации по электросварке рельсов. Наша команда состоит из опытных инженеров и квалифицированных рабочих, которые всегда готовы и рады поделиться своими знаниями с другими профессионалами в этой области. Сервисная служба компании Railwelding уделяет много внимания качественной передаче знаний, постоянному сопровождению и обеспечению устойчивого производства без необходимости частого технического обслуживания. Такой комплексный подход к клиентскому сервису является залогом долгосрочного плодотворного сотрудничества. Мы охотно обучим и проконсультируем вас по всем вопросам эксплуатации и обслуживания выпускаемого нами оборудования.
        </p>
      </div>
    </div>

    <div class="bg-white/80 py-4 min-h-screen grid grid-cols-1 content-center">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">

        <div class="my-4">
          <p class="font-opensans font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-800 to-blue-900 text-[20px] md:text-[40px] uppercase se lect-none">
            Обслуживание и устранение неполадок на месте
          </p>
        </div>

        <p class="text-2xl md:text-lg text-main-primary se lect-none font-opensans font-semibold">
          Мы предлагаем сервисное обслуживание и устранение неполадок на месте для всего ассортимента продуктов и оборудования Railwelding.
        </p>
        
        <p class="text-2xl md:text-lg text-main-primary se lect-none font-opensans font-semibold">
          + Анализ ошибок и устранение неисправностей на месте
        </p>

        <p class="text-2xl md:text-lg text-main-primary se lect-none font-opensans font-semibold">
          + Ремонт или замена неисправных компонентов силами опытных технических специалистов
        </p>
        <p class="text-2xl md:text-lg text-main-primary se lect-none font-opensans font-semibold">
          + Документальная фиксация случаев возникновения неисправностей и описание способов устранения неисправностей (сервисные отчеты)
        </p>
        <p class="text-2xl md:text-lg text-main-primary se lect-none font-opensans font-semibold">
          + Рекомендации по предотвращению неисправностей
        </p>

        <p class="text-2xl md:text-lg text-main-primary se lect-none font-opensans font-semibold">
          Наши специалисты готовы оперативно вмешаться, чтобы работы можно было возобновить как можно скорее.
        </p>
          
      </div>
    </div>

    <div class="bg-white/80 py-4 min-h-screen grid grid-cols-1 content-center">
      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">
        <div class="my-4">
          <p class="font-opensans font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-800 to-blue-900 text-[20px] md:text-[40px] uppercase se lect-none">Капитальный ремонт оборудования</p>
        </div>
         
        <p class="text-2xl md:text-lg text-main-primary se lect-none font-opensans font-semibold">
          Профессиональное и регулярное техническое обслуживание оборудования минимизирует внеплановые и дорогостоящие простои и обеспечивает необходимую производительность. Благодаря этому, также снижаются до необходимого минимума расходы на ремонт. Сервисные специалисты Railwelding имеют многолетний опыт разработки и ремонта рельсосварочных машин и комплектующего оборудования и регулярно осуществляют гарантийное и пост гарантийное обслуживание производимого оборудования в соответствии с действующими стандартами. Однако, если у вас возникнет необходимость в ремонте или модернизации (переоснащении) устаревшего или вышедшего из строя рельсосварочного оборудования, мы окажем вам быструю и надёжную помощь в этом. Благодаря наличию необходимого собственного оборудования, инструментов и комплектующих деталей, ваше оборудование быстро вернётся в строй. Мы готовы не только осуществить полное восстановление бывшего в эксплуатации оборудования, но и улучшить его технические характеристики, необходимые для введения вашей устаревшей рельсосварочной машины в современное производство. Мы дадим вашему оборудованию новую жизнь!

        </p>
      </div>
    </div>


    
    <div class="bg-white/80 py-4 min-h-screen grid grid-cols-1 content-center">


      <div class="container mx-auto px-4 lg:max-w-7xl lg:px-8">
        <div class="flex items-center justify-center text-center">
          <div class="my-4">
            <p class="font-opensans font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-800 to-blue-900 text-[20px] md:text-[40px] uppercase se lect-none">О нас</p>
          </div>
        </div>

        <div class="flex items-center justify-center text-center">
          <div class="w-[850px]">
            <p class="text-2xl md:text-lg text-main-primary se lect-none font-opensans font-semibold">
              КОМПАНИЯ RAILWELDING Лидер в разработке и производстве рельсосварочного оборудования. Наши инновационные технологии и высокое качество материалов обеспечивают надёжность и долговечность нашего оборудования. Наша компания предлагает широкий ассортимент рельсосварочных машин, разработанных и изготовленных полностью внутри компании с учетом особенностей каждого проекта и потребностей каждого клиента. В нашем каталоге вы найдете оборудование, доступное в различных конфигурациях. С нами вы можете быть уверены, что ваш процесс сварки рельсов будет проходить без задержек и неполадок!
            </p>
          </div>
        </div>
      

      <div class="flex items-center justify-center py-2 mt-8 px-10">
        <p class="text-2xl md:text-lg text-main-primary se lect-none font-opensans font-semibold">С нами вы можете быть уверены, что ваш процесс сварки рельсов будет проходить без задержек и неполадок!</p>
      </div>

      <div class="flex items-center justify-center py-4">
        <img src="/logo.png" class=" h-8"/>
      </div>
      </div>
      
    </div>


  </div>

</template>