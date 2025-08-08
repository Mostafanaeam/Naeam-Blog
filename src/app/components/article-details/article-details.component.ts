import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
})
export class ArticleDetailsComponent implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const articles = [
      {
        id: 1,
        title: ' أين يذهب  الإنسان عندما يجد أن جميع الأماكن لا تناسبه؟',
        date: 'August 8, 2025',
        image: 'https://images.unsplash.com/photo-1754404053324-8f910c2b7e2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
        sections: [
          {
            type: 'paragraph',
            content: `الحقيقة المُرّة إن لا صديق أقدر أتكّل عليه، ولا رفيق يضمني، ولا حبيب يحن عليّ بصدق كامل. الواقع بيقول إن البشر بيتغيّروا، والظروف بتقلب، والمشاعر مش دايمًا ثابتة.
الكلام ده مؤلم، خصوصًا لو كنت من النوع اللي بيحب بعمق، وبيعطي من قلبه. لكن لازم تفهم إن الاعتماد الكامل على الناس في راحتك العاطفية والمواساة، بيخليك ضعيف، مهزوز، وسهل الانكسار.

محدش هينفعك، كل واحد في الآخر لوحده.
دي مش دعوة للتشاؤم، دي دعوة للوعي. لما تبني سعادتك أو استقرارك النفسي على وجود أشخاص معينين، كل موقف معاهم هيبقى اختبار:
هل هو صادق ولا بيجامل؟
هل هو موجود عشان مصلحته ولا عشانك؟
أمتى هيتعب ويقرر يمشي؟

النتيجة؟ هتتعور كتير، وهتتخبط أكتر، لحد ما تتعلم الدرس بنفسك.`
          },
          {
            type: 'paragraph',
            content: `الحل مش إنك تعزل نفسك عن العالم وتبقى في قوقعة، ولا إنك تمسك في أي حد وخلاص لمجرد إنك عايز حد يسمعك أو يحتويك. الحل الحقيقي هو إنك تعيد ترتيب أولوياتك، وتعرف إن الاحتياج الأساسي للحب، الأمان، والتقدير، لازم يكون مصدره ثابت مش متقلب… والمصدر الثابت الوحيد هو ربنا، وبعده علاقتك بنفسك.

البوصلة هنا واضحة:
جزء أول: تهتم بنفسك — تطوير، وعي، تحسين، بناء ثقة حقيقية جواك.
جزء ثاني: تهتم بعلاقتك بربنا — تقرّب، تذكّر، تستمد منه الدعم والثبات.`
          },
          {
            type: 'paragraph',
            content: `الناس هتيجي وهتمشي. حتى أقرب الأشخاص ليك ممكن في لحظة يختفوا أو يتغيّروا. العلاقات جميلة، لكن ماينفعش تبقى هي عمودك الفقري العاطفي. لازم يكون عندك أساس داخلي قوي، قائم على إيمانك، وعلى احترامك وحبك لنفسك، مش على وجود شخص تاني.`
          },
          {
            type: 'paragraph',
            content: `خدها من قصريها: ما ترفعش سقف توقعاتك مع حد، لأنك كل ما عليته، كل ما الخذلان لما ييجي هيكسر أكتر. خليك ثابت حتى لو لوحدك. وجود الناس قيمة مضافة، مش شرط أساسي لسلامك النفسي.
والقوة الحقيقية مش في إنك ما تحتاجش حد، القوة في إنك حتى لو فقدت الكل، تفضل واقف، متماسك، وعارف طريقك.`
          }
        ]
      }
    ];
    this.article = articles.find((article) => article.id === id);
  }
}
