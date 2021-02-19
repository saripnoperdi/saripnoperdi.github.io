var apikey = 'AIzaSyCp_IT5zvyOMa9FWpGhsRKBjUDMQRFoa0k';

$('.item-by').click(function(){
  let id = this.id;
  let text = $(this).html();

  $('.by').html(text);
  $('.by').attr('id',id);
});

$('.btn-cari').on('click',function(){
  var url = 'https://www.googleapis.com/youtube/v3/channels';
  var s_by = $('.by').attr('id');
  var tb_val = $('#tb_val').val();
  var param = {
    'part': 'statistics,snippet,contentDetails',
    'key':apikey,
    [s_by]:tb_val
  }
  ajax_send(url,param,find_channel);
});
function find_channel(result){
  if(result.pageInfo.totalResults < 1){
    alert("Channel Not Found ");
    return;
  }
  let id_channel = result.items[0].id;
  get_best_view_count(id_channel);
  
  let html = `
  <div class="row mt-3 ">
    <div class="col-md-4 text-center m-auto">
      <img src="`+result.items[0].snippet.thumbnails.high.url+`" width="80%" class=" rounded-circle " id="poto" alt="">
    </div>
    <div class="col-md-8 mt-4">
      <div class="row">
        <div class="col-5">
          <label>Channel Name</label>
        </div>
        <div class="col-7">
          <label class="title" >: `+result.items[0].snippet.title+` </label>
        </div>
      </div>

      <div class="row">
        <div class="col-5">
          <label>Description</label>
        </div>
        <div class="col-7">
          <p class="description" >: `+result.items[0].snippet.description+`</p>
        </div>
      </div>

      <div class="row">
        <div class="col-5">
          <label>Channel Created</label>
        </div>
        <div class="col-7">
          <label class="publishedAt" >: `+result.items[0].snippet.publishedAt+`</label>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col-5">
          <label>Subscriber Count</label>
        </div>
        <div class="col-7">
          <label class="subscriberCount" >: `+addCommas(result.items[0].statistics.subscriberCount.toString())+`</label>
        </div>
      </div>
      
      <div class="row">
        <div class="col-5">
          <label>View Count</label>
        </div>
        <div class="col-7">
          <label class="viewCount" >: `+addCommas(result.items[0].statistics.viewCount.toString())+`</label>
        </div>
      </div>

      <div class="row">
        <div class="col-5">
          <label>Video Count</label>
        </div>
        <div class="col-7">
          <label class="videoCount" >: `+addCommas(result.items[0].statistics.videoCount.toString())+`</label>
        </div>
      </div>

    </div>
  </div>
  
  `;

  $('#profile-channel').html(html);
}

function ajax_send( url_send,data_param, callback ){
  $.ajax({
    url:url_send,
    type:'get',
    dataType:'json',
    data:data_param,
    success: function(result){
      return callback(result);
    },
    error:function (){
      return false;
    }
  
  });
}

function get_best_view_count(id_channel){
  let url =  "https://youtube.googleapis.com/youtube/v3/search";
  let param = {
    'key':apikey,
    'part':'id',
    'channelId':id_channel,
    'order':'viewCount',
    'maxResults':3
  }

  ajax_send(url,param,callback_best_view_count);

}

function callback_best_view_count(result){
  let url="https://youtube.googleapis.com/youtube/v3/videos";
  var id_videos = [];
  $.each(result.items,function(i,value){
    id_videos[i] = value.id.videoId;
  });
  
  let param = {
    'key':apikey,
    'part':'statistics',
    'id':id_videos.toString()
  }
  ajax_send(url,param,view_count);
}

function view_count(result){
  var viewCount = [];
  let sourch = '';
  $.each(result.items,function(i,value){
    sourch += `
      <div class="col-md-4 p-2 ">
        <div class="embed-responsive embed-responsive-16by9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/` +value.id+ `" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p class="p-3 text-center" style="color:#fff;background-color:#000">` +addCommas(value.statistics.viewCount)+ ` Views</p>
      </div>
    `;
  });
  let html = `
  <div class="col-12 text-center">
    <h4>TOP `+result.items.length+` BEST VIEWS</h4>
  </div>
  <div class="col-12">
    <div class="row mt-4 justify-content-center " >

      `+sourch+`
      
    </div>
  </div>
  `
  $('#best_view').html(html);
}
function addCommas(nStr) {
  nStr += '';
  var x = nStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}